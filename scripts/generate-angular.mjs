import fs from 'node:fs';
import path, {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const manifestPath = path.join(__dirname, '..', 'custom-elements.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const outputDir = path.join(__dirname, '..', 'angular', 'projects', 'elements', 'src', 'lib');

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function toPascalCase(str) {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

fs.mkdirSync(outputDir, { recursive: true });

let indexExports = [];

manifest.modules.forEach(mod => {
  mod.declarations?.forEach(decl => {
    if (decl.customElement && decl.tagName) {
      const tagName = decl.tagName;
      const className = toPascalCase(tagName) + 'Directive';
      const properties = decl.members?.filter(m => m.kind === 'field' && !m.static && m.privacy !== 'private' && m.privacy !== 'protected') || [];
      const events = decl.events || [];

      let inputs = [];
      let outputs = [];
      let hostBindings = [];
      let hostListeners = [];

      const eventNames = new Set(events.map(e => e.name));

      properties.forEach(prop => {
        let type = prop.type?.text || 'any';
        type = type.replace(/\|/g, ' | ');

        const isPrimitive = /^(string|number|boolean|any)( \| (string|number|boolean|undefined|null))*$/.test(type);
        const isStringLiteralUnion = type.includes("'");

        if (!isPrimitive && !isStringLiteralUnion) {
            type = 'any';
        }

        const safePropName = prop.name.includes('-') ? `'${prop.name}'` : prop.name;

        inputs.push(`  @Input() ${safePropName}?: ${type};`);
        hostBindings.push(`  @HostBinding('${prop.name}') get _${toCamelCase(prop.name)}() { return this['${prop.name}']; }`);
      });

      events.forEach(evt => {
        const evtName = evt.name;

        let outputPropName = toCamelCase(evtName);
        if (properties.some(p => p.name === evtName || toCamelCase(p.name) === outputPropName)) {
           outputPropName = outputPropName + 'Event';
        }

        outputs.push(`  @Output('${evtName}') ${outputPropName} = new EventEmitter<Event>();`);
        hostListeners.push(`  @HostListener('${evtName}', ['$event']) on${toPascalCase(evtName)}(event: Event) { this.${outputPropName}.emit(event); }`);
      });

      const fileContent = `
import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/${tagName}/index.js';

@Directive({
  selector: '${tagName}',
  standalone: true
})
export class ${className} {
${inputs.join('\n')}
${outputs.join('\n')}

${hostBindings.join('\n')}
${hostListeners.join('\n')}
}
`;
      const fileName = `${tagName}.directive.ts`;
      fs.writeFileSync(path.join(outputDir, fileName), fileContent.trim() + '\n');
      indexExports.push(`export * from './${fileName.replace('.ts', '')}';`);
    }
  });
});

fs.writeFileSync(path.join(outputDir, 'index.ts'), indexExports.join('\n') + '\n');
console.log('Angular wrappers generated!');
