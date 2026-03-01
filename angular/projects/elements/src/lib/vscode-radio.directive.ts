import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-radio/index.js';

@Directive({
  selector: 'vscode-radio',
  standalone: true
})
export class VscodeRadioDirective {
  @Input() autofocus?: boolean;
  @Input() checked?: boolean;
  @Input() defaultChecked?: boolean;
  @Input() invalid?: boolean;
  @Input() name?: string;
  @Input() value?: string;
  @Input() disabled?: boolean;
  @Input() required?: boolean;
  @Input() form?: any;
  @Input() validity?: any;
  @Input() validationMessage?: string;
  @Input() willValidate?: boolean;
  @Input() label?: string;
  @Input() focused?: boolean;
  @Input() version?: string;
  @Output('change') change = new EventEmitter<Event>();
  @Output('invalid') invalidEvent = new EventEmitter<Event>();

  @HostBinding('autofocus') get _autofocus() { return this['autofocus']; }
  @HostBinding('checked') get _checked() { return this['checked']; }
  @HostBinding('defaultChecked') get _defaultChecked() { return this['defaultChecked']; }
  @HostBinding('invalid') get _invalid() { return this['invalid']; }
  @HostBinding('name') get _name() { return this['name']; }
  @HostBinding('value') get _value() { return this['value']; }
  @HostBinding('disabled') get _disabled() { return this['disabled']; }
  @HostBinding('required') get _required() { return this['required']; }
  @HostBinding('form') get _form() { return this['form']; }
  @HostBinding('validity') get _validity() { return this['validity']; }
  @HostBinding('validationMessage') get _validationMessage() { return this['validationMessage']; }
  @HostBinding('willValidate') get _willValidate() { return this['willValidate']; }
  @HostBinding('label') get _label() { return this['label']; }
  @HostBinding('focused') get _focused() { return this['focused']; }
  @HostBinding('version') get _version() { return this['version']; }
  @HostListener('change', ['$event']) onChange(event: Event) { this.change.emit(event); }
  @HostListener('invalid', ['$event']) onInvalid(event: Event) { this.invalidEvent.emit(event); }
}
