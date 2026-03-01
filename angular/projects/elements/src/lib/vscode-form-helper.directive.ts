import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-form-helper/index.js';

@Directive({
  selector: 'vscode-form-helper',
  standalone: true
})
export class VscodeFormHelperDirective {
  @Input() version?: string;


  @HostBinding('version') get _version() { return this['version']; }

}
