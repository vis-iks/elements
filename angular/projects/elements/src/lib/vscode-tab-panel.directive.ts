import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-tab-panel/index.js';

@Directive({
  selector: 'vscode-tab-panel',
  standalone: true
})
export class VscodeTabPanelDirective {
  @Input() hidden?: boolean;
  @Input() panel?: boolean;
  @Input() version?: string;


  @HostBinding('hidden') get _hidden() { return this['hidden']; }
  @HostBinding('panel') get _panel() { return this['panel']; }
  @HostBinding('version') get _version() { return this['version']; }

}
