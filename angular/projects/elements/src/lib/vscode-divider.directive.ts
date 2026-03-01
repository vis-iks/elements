import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-divider/index.js';

@Directive({
  selector: 'vscode-divider',
  standalone: true
})
export class VscodeDividerDirective {
  @Input() role?: 'separator'  |  'presentation';
  @Input() version?: string;


  @HostBinding('role') get _role() { return this['role']; }
  @HostBinding('version') get _version() { return this['version']; }

}
