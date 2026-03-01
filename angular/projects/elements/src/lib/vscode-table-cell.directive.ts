import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-table-cell/index.js';

@Directive({
  selector: 'vscode-table-cell',
  standalone: true
})
export class VscodeTableCellDirective {
  @Input() columnLabel?: string;
  @Input() compact?: boolean;
  @Input() version?: string;


  @HostBinding('columnLabel') get _columnLabel() { return this['columnLabel']; }
  @HostBinding('compact') get _compact() { return this['compact']; }
  @HostBinding('version') get _version() { return this['version']; }

}
