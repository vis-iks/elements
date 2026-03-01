import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-multi-select/index.js';

@Directive({
  selector: 'vscode-multi-select',
  standalone: true
})
export class VscodeMultiSelectDirective {
  @Input() defaultValue?: any;
  @Input() required?: boolean;
  @Input() name?: any;
  @Input() selectedIndexes?: any;
  @Input() value?: any;
  @Input() form?: any;
  @Input() validity?: any;
  @Input() validationMessage?: string;
  @Input() willValidate?: any;
  @Input() multiSelect?: boolean;
  @Input() invalid?: boolean;
  @Input() creatable?: boolean;
  @Input() combobox?: any;
  @Input() label?: string;
  @Input() disabled?: boolean;
  @Input() filter?: 'contains'  |  'fuzzy'  |  'startsWith'  |  'startsWithPerTerm';
  @Input() focused?: boolean;
  @Input() open?: boolean;
  @Input() options?: any;
  @Input() position?: 'above'  |  'below';
  @Input() version?: string;
  @Output('change') change = new EventEmitter<Event>();
  @Output('input') input = new EventEmitter<Event>();

  @HostBinding('defaultValue') get _defaultValue() { return this['defaultValue']; }
  @HostBinding('required') get _required() { return this['required']; }
  @HostBinding('name') get _name() { return this['name']; }
  @HostBinding('selectedIndexes') get _selectedIndexes() { return this['selectedIndexes']; }
  @HostBinding('value') get _value() { return this['value']; }
  @HostBinding('form') get _form() { return this['form']; }
  @HostBinding('validity') get _validity() { return this['validity']; }
  @HostBinding('validationMessage') get _validationMessage() { return this['validationMessage']; }
  @HostBinding('willValidate') get _willValidate() { return this['willValidate']; }
  @HostBinding('multiSelect') get _multiSelect() { return this['multiSelect']; }
  @HostBinding('invalid') get _invalid() { return this['invalid']; }
  @HostBinding('creatable') get _creatable() { return this['creatable']; }
  @HostBinding('combobox') get _combobox() { return this['combobox']; }
  @HostBinding('label') get _label() { return this['label']; }
  @HostBinding('disabled') get _disabled() { return this['disabled']; }
  @HostBinding('filter') get _filter() { return this['filter']; }
  @HostBinding('focused') get _focused() { return this['focused']; }
  @HostBinding('open') get _open() { return this['open']; }
  @HostBinding('options') get _options() { return this['options']; }
  @HostBinding('position') get _position() { return this['position']; }
  @HostBinding('version') get _version() { return this['version']; }
  @HostListener('change', ['$event']) onChange(event: Event) { this.change.emit(event); }
  @HostListener('input', ['$event']) onInput(event: Event) { this.input.emit(event); }
}
