import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-form-container/index.js';

@Directive({
  selector: 'vscode-form-container',
  standalone: true
})
export class VscodeFormContainerDirective {
  @Input() responsive?: boolean;
  @Input() breakpoint?: number;
  @Input() version?: string;


  @HostBinding('responsive') get _responsive() { return this['responsive']; }
  @HostBinding('breakpoint') get _breakpoint() { return this['breakpoint']; }
  @HostBinding('version') get _version() { return this['version']; }

}
