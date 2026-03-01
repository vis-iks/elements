import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-progress-bar/index.js';

@Directive({
  selector: 'vscode-progress-bar',
  standalone: true
})
export class VscodeProgressBarDirective {
  @Input() value?: any;
  @Input() max?: number;
  @Input() indeterminate?: boolean;
  @Input() longRunningThreshold?: number;
  @Input() version?: string;


  @HostBinding('value') get _value() { return this['value']; }
  @HostBinding('max') get _max() { return this['max']; }
  @HostBinding('indeterminate') get _indeterminate() { return this['indeterminate']; }
  @HostBinding('longRunningThreshold') get _longRunningThreshold() { return this['longRunningThreshold']; }
  @HostBinding('version') get _version() { return this['version']; }

}
