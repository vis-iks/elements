import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-collapsible/index.js';

@Directive({
  selector: 'vscode-collapsible',
  standalone: true
})
export class VscodeCollapsibleDirective {
  @Input() alwaysShowHeaderActions?: boolean;
  @Input() title?: string;
  @Input() heading?: string;
  @Input() description?: string;
  @Input() open?: boolean;
  @Input() version?: string;
  @Output('vsc-collapsible-toggle') vscCollapsibleToggle = new EventEmitter<Event>();

  @HostBinding('alwaysShowHeaderActions') get _alwaysShowHeaderActions() { return this['alwaysShowHeaderActions']; }
  @HostBinding('title') get _title() { return this['title']; }
  @HostBinding('heading') get _heading() { return this['heading']; }
  @HostBinding('description') get _description() { return this['description']; }
  @HostBinding('open') get _open() { return this['open']; }
  @HostBinding('version') get _version() { return this['version']; }
  @HostListener('vsc-collapsible-toggle', ['$event']) onVscCollapsibleToggle(event: Event) { this.vscCollapsibleToggle.emit(event); }
}
