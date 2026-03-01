import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-tabs/index.js';

@Directive({
  selector: 'vscode-tabs',
  standalone: true
})
export class VscodeTabsDirective {
  @Input() panel?: boolean;
  @Input() selectedIndex?: number;
  @Input() version?: string;
  @Output('vsc-tabs-select') vscTabsSelect = new EventEmitter<Event>();

  @HostBinding('panel') get _panel() { return this['panel']; }
  @HostBinding('selectedIndex') get _selectedIndex() { return this['selectedIndex']; }
  @HostBinding('version') get _version() { return this['version']; }
  @HostListener('vsc-tabs-select', ['$event']) onVscTabsSelect(event: Event) { this.vscTabsSelect.emit(event); }
}
