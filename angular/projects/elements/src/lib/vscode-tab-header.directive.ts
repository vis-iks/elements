import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-tab-header/index.js';

@Directive({
  selector: 'vscode-tab-header',
  standalone: true
})
export class VscodeTabHeaderDirective {
  @Input() active?: boolean;
  @Input() panel?: boolean;
  @Input() version?: string;


  @HostBinding('active') get _active() { return this['active']; }
  @HostBinding('panel') get _panel() { return this['panel']; }
  @HostBinding('version') get _version() { return this['version']; }

}
