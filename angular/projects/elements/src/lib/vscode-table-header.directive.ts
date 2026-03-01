import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-table-header/index.js';

@Directive({
  selector: 'vscode-table-header',
  standalone: true
})
export class VscodeTableHeaderDirective {
  @Input() version?: string;


  @HostBinding('version') get _version() { return this['version']; }

}
