import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-textarea/index.js';

@Directive({
  selector: 'vscode-textarea',
  standalone: true
})
export class VscodeTextareaDirective {
  @Input() autocomplete?: 'on'  |  'off'  |  undefined;
  @Input() autofocus?: boolean;
  @Input() defaultValue?: string;
  @Input() disabled?: boolean;
  @Input() invalid?: boolean;
  @Input() label?: string;
  @Input() maxLength?: any;
  @Input() minLength?: any;
  @Input() rows?: any;
  @Input() cols?: any;
  @Input() name?: any;
  @Input() placeholder?: any;
  @Input() readonly?: boolean;
  @Input() resize?: 'both'  |  'horizontal'  |  'vertical'  |  'none';
  @Input() required?: boolean;
  @Input() spellcheck?: boolean;
  @Input() monospace?: boolean;
  @Input() value?: string;
  @Input() wrappedElement?: any;
  @Input() form?: any;
  @Input() validity?: any;
  @Input() validationMessage?: any;
  @Input() willValidate?: any;
  @Input() minlength?: any;
  @Input() maxlength?: any;
  @Input() version?: string;
  @Output('change') change = new EventEmitter<Event>();
  @Output('input') input = new EventEmitter<Event>();

  @HostBinding('autocomplete') get _autocomplete() { return this['autocomplete']; }
  @HostBinding('autofocus') get _autofocus() { return this['autofocus']; }
  @HostBinding('defaultValue') get _defaultValue() { return this['defaultValue']; }
  @HostBinding('disabled') get _disabled() { return this['disabled']; }
  @HostBinding('invalid') get _invalid() { return this['invalid']; }
  @HostBinding('label') get _label() { return this['label']; }
  @HostBinding('maxLength') get _maxLength() { return this['maxLength']; }
  @HostBinding('minLength') get _minLength() { return this['minLength']; }
  @HostBinding('rows') get _rows() { return this['rows']; }
  @HostBinding('cols') get _cols() { return this['cols']; }
  @HostBinding('name') get _name() { return this['name']; }
  @HostBinding('placeholder') get _placeholder() { return this['placeholder']; }
  @HostBinding('readonly') get _readonly() { return this['readonly']; }
  @HostBinding('resize') get _resize() { return this['resize']; }
  @HostBinding('required') get _required() { return this['required']; }
  @HostBinding('spellcheck') get _spellcheck() { return this['spellcheck']; }
  @HostBinding('monospace') get _monospace() { return this['monospace']; }
  @HostBinding('value') get _value() { return this['value']; }
  @HostBinding('wrappedElement') get _wrappedElement() { return this['wrappedElement']; }
  @HostBinding('form') get _form() { return this['form']; }
  @HostBinding('validity') get _validity() { return this['validity']; }
  @HostBinding('validationMessage') get _validationMessage() { return this['validationMessage']; }
  @HostBinding('willValidate') get _willValidate() { return this['willValidate']; }
  @HostBinding('minlength') get _minlength() { return this['minlength']; }
  @HostBinding('maxlength') get _maxlength() { return this['maxlength']; }
  @HostBinding('version') get _version() { return this['version']; }
  @HostListener('change', ['$event']) onChange(event: Event) { this.change.emit(event); }
  @HostListener('input', ['$event']) onInput(event: Event) { this.input.emit(event); }
}
