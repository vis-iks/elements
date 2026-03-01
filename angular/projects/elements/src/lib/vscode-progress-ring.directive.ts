import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-progress-ring/index.js';

@Directive({
  selector: 'vscode-progress-ring',
  standalone: true
})
export class VscodeProgressRingDirective {
  @Input() ariaLabel?: string;
  @Input() ariaLive?: string;
  @Input() role?: string;
  @Input() version?: string;


  @HostBinding('ariaLabel') get _ariaLabel() { return this['ariaLabel']; }
  @HostBinding('ariaLive') get _ariaLive() { return this['ariaLive']; }
  @HostBinding('role') get _role() { return this['role']; }
  @HostBinding('version') get _version() { return this['version']; }

}
