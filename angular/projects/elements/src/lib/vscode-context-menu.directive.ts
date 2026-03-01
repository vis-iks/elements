import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-context-menu/index.js';

@Directive({
  selector: 'vscode-context-menu',
  standalone: true
})
export class VscodeContextMenuDirective {
  @Input() data?: any;
  @Input() preventClose?: boolean;
  @Input() show?: boolean;
  @Input() version?: string;
  @Output('vsc-menu-select') vscMenuSelect = new EventEmitter<Event>();

  @HostBinding('data') get _data() { return this['data']; }
  @HostBinding('preventClose') get _preventClose() { return this['preventClose']; }
  @HostBinding('show') get _show() { return this['show']; }
  @HostBinding('version') get _version() { return this['version']; }
  @HostListener('vsc-menu-select', ['$event']) onVscMenuSelect(event: Event) { this.vscMenuSelect.emit(event); }
}
