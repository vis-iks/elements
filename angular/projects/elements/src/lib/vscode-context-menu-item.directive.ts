import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-context-menu-item/index.js';

@Directive({
  selector: 'vscode-context-menu-item',
  standalone: true
})
export class VscodeContextMenuItemDirective {
  @Input() label?: string;
  @Input() keybinding?: string;
  @Input() value?: string;
  @Input() separator?: boolean;
  @Input() tabindex?: number;
  @Input() version?: string;


  @HostBinding('label') get _label() { return this['label']; }
  @HostBinding('keybinding') get _keybinding() { return this['keybinding']; }
  @HostBinding('value') get _value() { return this['value']; }
  @HostBinding('separator') get _separator() { return this['separator']; }
  @HostBinding('tabindex') get _tabindex() { return this['tabindex']; }
  @HostBinding('version') get _version() { return this['version']; }

}
