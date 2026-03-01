import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-table-row/index.js';

@Directive({
  selector: 'vscode-table-row',
  standalone: true
})
export class VscodeTableRowDirective {
  @Input() version?: string;


  @HostBinding('version') get _version() { return this['version']; }

}
