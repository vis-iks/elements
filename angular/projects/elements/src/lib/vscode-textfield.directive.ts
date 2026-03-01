import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-textfield/index.js';

@Directive({
  selector: 'vscode-textfield',
  standalone: true
})
export class VscodeTextfieldDirective {
  @Input() autocomplete?: 'on'  |  'off'  |  undefined;
  @Input() autofocus?: boolean;
  @Input() defaultValue?: string;
  @Input() disabled?: boolean;
  @Input() focused?: boolean;
  @Input() invalid?: boolean;
  @Input() max?: any;
  @Input() maxLength?: any;
  @Input() min?: any;
  @Input() minLength?: any;
  @Input() multiple?: boolean;
  @Input() name?: any;
  @Input() pattern?: any;
  @Input() placeholder?: any;
  @Input() readonly?: boolean;
  @Input() required?: boolean;
  @Input() step?: any;
  @Input() type?: any;
  @Input() value?: string;
  @Input() minlength?: any;
  @Input() maxlength?: any;
  @Input() form?: any;
  @Input() validity?: any;
  @Input() validationMessage?: any;
  @Input() willValidate?: any;
  @Input() wrappedElement?: any;
  @Input() version?: string;
  @Output('change') change = new EventEmitter<Event>();
  @Output('input') input = new EventEmitter<Event>();

  @HostBinding('autocomplete') get _autocomplete() { return this['autocomplete']; }
  @HostBinding('autofocus') get _autofocus() { return this['autofocus']; }
  @HostBinding('defaultValue') get _defaultValue() { return this['defaultValue']; }
  @HostBinding('disabled') get _disabled() { return this['disabled']; }
  @HostBinding('focused') get _focused() { return this['focused']; }
  @HostBinding('invalid') get _invalid() { return this['invalid']; }
  @HostBinding('max') get _max() { return this['max']; }
  @HostBinding('maxLength') get _maxLength() { return this['maxLength']; }
  @HostBinding('min') get _min() { return this['min']; }
  @HostBinding('minLength') get _minLength() { return this['minLength']; }
  @HostBinding('multiple') get _multiple() { return this['multiple']; }
  @HostBinding('name') get _name() { return this['name']; }
  @HostBinding('pattern') get _pattern() { return this['pattern']; }
  @HostBinding('placeholder') get _placeholder() { return this['placeholder']; }
  @HostBinding('readonly') get _readonly() { return this['readonly']; }
  @HostBinding('required') get _required() { return this['required']; }
  @HostBinding('step') get _step() { return this['step']; }
  @HostBinding('type') get _type() { return this['type']; }
  @HostBinding('value') get _value() { return this['value']; }
  @HostBinding('minlength') get _minlength() { return this['minlength']; }
  @HostBinding('maxlength') get _maxlength() { return this['maxlength']; }
  @HostBinding('form') get _form() { return this['form']; }
  @HostBinding('validity') get _validity() { return this['validity']; }
  @HostBinding('validationMessage') get _validationMessage() { return this['validationMessage']; }
  @HostBinding('willValidate') get _willValidate() { return this['willValidate']; }
  @HostBinding('wrappedElement') get _wrappedElement() { return this['wrappedElement']; }
  @HostBinding('version') get _version() { return this['version']; }
  @HostListener('change', ['$event']) onChange(event: Event) { this.change.emit(event); }
  @HostListener('input', ['$event']) onInput(event: Event) { this.input.emit(event); }
}
