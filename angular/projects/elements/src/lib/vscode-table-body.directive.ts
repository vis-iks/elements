import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-table-body/index.js';

@Directive({
  selector: 'vscode-table-body',
  standalone: true
})
export class VscodeTableBodyDirective {
  @Input() version?: string;


  @HostBinding('version') get _version() { return this['version']; }

}
