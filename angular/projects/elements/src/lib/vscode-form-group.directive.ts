import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-form-group/index.js';

@Directive({
  selector: 'vscode-form-group',
  standalone: true
})
export class VscodeFormGroupDirective {
  @Input() variant?: any;
  @Input() version?: string;


  @HostBinding('variant') get _variant() { return this['variant']; }
  @HostBinding('version') get _version() { return this['version']; }

}
