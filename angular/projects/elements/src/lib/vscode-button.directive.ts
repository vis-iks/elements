import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-button/index.js';

@Directive({
  selector: 'vscode-button',
  standalone: true
})
export class VscodeButtonDirective {
  @Input() autofocus?: boolean;
  @Input() secondary?: boolean;
  @Input() block?: boolean;
  @Input() disabled?: boolean;
  @Input() icon?: string;
  @Input() iconSpin?: boolean;
  @Input() iconSpinDuration?: any;
  @Input() iconAfter?: string;
  @Input() iconAfterSpin?: boolean;
  @Input() iconAfterSpinDuration?: any;
  @Input() focused?: boolean;
  @Input() name?: any;
  @Input() iconOnly?: boolean;
  @Input() type?: 'submit'  |  'reset'  |  'button';
  @Input() value?: string;
  @Input() form?: any;
  @Input() version?: string;


  @HostBinding('autofocus') get _autofocus() { return this['autofocus']; }
  @HostBinding('secondary') get _secondary() { return this['secondary']; }
  @HostBinding('block') get _block() { return this['block']; }
  @HostBinding('disabled') get _disabled() { return this['disabled']; }
  @HostBinding('icon') get _icon() { return this['icon']; }
  @HostBinding('iconSpin') get _iconSpin() { return this['iconSpin']; }
  @HostBinding('iconSpinDuration') get _iconSpinDuration() { return this['iconSpinDuration']; }
  @HostBinding('iconAfter') get _iconAfter() { return this['iconAfter']; }
  @HostBinding('iconAfterSpin') get _iconAfterSpin() { return this['iconAfterSpin']; }
  @HostBinding('iconAfterSpinDuration') get _iconAfterSpinDuration() { return this['iconAfterSpinDuration']; }
  @HostBinding('focused') get _focused() { return this['focused']; }
  @HostBinding('name') get _name() { return this['name']; }
  @HostBinding('iconOnly') get _iconOnly() { return this['iconOnly']; }
  @HostBinding('type') get _type() { return this['type']; }
  @HostBinding('value') get _value() { return this['value']; }
  @HostBinding('form') get _form() { return this['form']; }
  @HostBinding('version') get _version() { return this['version']; }

}
