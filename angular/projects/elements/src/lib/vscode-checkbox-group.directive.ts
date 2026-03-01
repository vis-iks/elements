import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-checkbox-group/index.js';

@Directive({
  selector: 'vscode-checkbox-group',
  standalone: true
})
export class VscodeCheckboxGroupDirective {
  @Input() variant?: 'horizontal'  |  'vertical';
  @Input() version?: string;


  @HostBinding('variant') get _variant() { return this['variant']; }
  @HostBinding('version') get _version() { return this['version']; }

}
