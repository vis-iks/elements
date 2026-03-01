import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-toolbar-button/index.js';

@Directive({
  selector: 'vscode-toolbar-button',
  standalone: true
})
export class VscodeToolbarButtonDirective {
  @Input() icon?: string;
  @Input() label?: any;
  @Input() toggleable?: boolean;
  @Input() checked?: boolean;
  @Input() version?: string;
  @Output('change') change = new EventEmitter<Event>();

  @HostBinding('icon') get _icon() { return this['icon']; }
  @HostBinding('label') get _label() { return this['label']; }
  @HostBinding('toggleable') get _toggleable() { return this['toggleable']; }
  @HostBinding('checked') get _checked() { return this['checked']; }
  @HostBinding('version') get _version() { return this['version']; }
  @HostListener('change', ['$event']) onChange(event: Event) { this.change.emit(event); }
}
