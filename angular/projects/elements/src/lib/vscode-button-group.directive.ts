import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-button-group/index.js';

@Directive({
  selector: 'vscode-button-group',
  standalone: true
})
export class VscodeButtonGroupDirective {
  @Input() version?: string;


  @HostBinding('version') get _version() { return this['version']; }

}
