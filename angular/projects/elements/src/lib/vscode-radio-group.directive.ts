import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-radio-group/index.js';

@Directive({
  selector: 'vscode-radio-group',
  standalone: true
})
export class VscodeRadioGroupDirective {
  @Input() variant?: 'horizontal'  |  'vertical';
  @Input() version?: string;
  @Output('change') change = new EventEmitter<Event>();

  @HostBinding('variant') get _variant() { return this['variant']; }
  @HostBinding('version') get _version() { return this['version']; }
  @HostListener('change', ['$event']) onChange(event: Event) { this.change.emit(event); }
}
