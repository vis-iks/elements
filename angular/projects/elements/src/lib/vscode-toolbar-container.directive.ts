import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-toolbar-container/index.js';

@Directive({
  selector: 'vscode-toolbar-container',
  standalone: true
})
export class VscodeToolbarContainerDirective {
  @Input() version?: string;


  @HostBinding('version') get _version() { return this['version']; }

}
