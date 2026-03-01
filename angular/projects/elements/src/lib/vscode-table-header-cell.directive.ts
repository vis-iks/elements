import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-table-header-cell/index.js';

@Directive({
  selector: 'vscode-table-header-cell',
  standalone: true
})
export class VscodeTableHeaderCellDirective {
  @Input() minWidth?: string;
  @Input() version?: string;


  @HostBinding('minWidth') get _minWidth() { return this['minWidth']; }
  @HostBinding('version') get _version() { return this['version']; }

}
