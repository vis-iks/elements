import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-option/index.js';

@Directive({
  selector: 'vscode-option',
  standalone: true
})
export class VscodeOptionDirective {
  @Input() value?: any;
  @Input() description?: string;
  @Input() selected?: boolean;
  @Input() disabled?: boolean;
  @Input() version?: string;


  @HostBinding('value') get _value() { return this['value']; }
  @HostBinding('description') get _description() { return this['description']; }
  @HostBinding('selected') get _selected() { return this['selected']; }
  @HostBinding('disabled') get _disabled() { return this['disabled']; }
  @HostBinding('version') get _version() { return this['version']; }

}
