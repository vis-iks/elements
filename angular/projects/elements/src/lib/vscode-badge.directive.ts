import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-badge/index.js';

@Directive({
  selector: 'vscode-badge',
  standalone: true
})
export class VscodeBadgeDirective {
  @Input() variant?:  |  'default'
     |  'counter'
     |  'activity-bar-counter'
     |  'tab-header-counter';
  @Input() version?: string;


  @HostBinding('variant') get _variant() { return this['variant']; }
  @HostBinding('version') get _version() { return this['version']; }

}
