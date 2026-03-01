import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-table/index.js';

@Directive({
  selector: 'vscode-table',
  standalone: true
})
export class VscodeTableDirective {
  @Input() resizable?: boolean;
  @Input() responsive?: boolean;
  @Input() bordered?: boolean;
  @Input() borderedColumns?: boolean;
  @Input() borderedRows?: boolean;
  @Input() breakpoint?: number;
  @Input() columns?: any;
  @Input() minColumnWidth?: string;
  @Input() delayedResizing?: boolean;
  @Input() zebra?: boolean;
  @Input() zebraOdd?: boolean;
  @Input() version?: string;


  @HostBinding('resizable') get _resizable() { return this['resizable']; }
  @HostBinding('responsive') get _responsive() { return this['responsive']; }
  @HostBinding('bordered') get _bordered() { return this['bordered']; }
  @HostBinding('borderedColumns') get _borderedColumns() { return this['borderedColumns']; }
  @HostBinding('borderedRows') get _borderedRows() { return this['borderedRows']; }
  @HostBinding('breakpoint') get _breakpoint() { return this['breakpoint']; }
  @HostBinding('columns') get _columns() { return this['columns']; }
  @HostBinding('minColumnWidth') get _minColumnWidth() { return this['minColumnWidth']; }
  @HostBinding('delayedResizing') get _delayedResizing() { return this['delayedResizing']; }
  @HostBinding('zebra') get _zebra() { return this['zebra']; }
  @HostBinding('zebraOdd') get _zebraOdd() { return this['zebraOdd']; }
  @HostBinding('version') get _version() { return this['version']; }

}
