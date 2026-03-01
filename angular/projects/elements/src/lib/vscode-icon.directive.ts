import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-icon/index.js';

@Directive({
  selector: 'vscode-icon',
  standalone: true
})
export class VscodeIconDirective {
  @Input() label?: string;
  @Input() name?: string;
  @Input() size?: number;
  @Input() spin?: boolean;
  @Input() spinDuration?: number;
  @Input() actionIcon?: boolean;
  @Input() version?: string;


  @HostBinding('label') get _label() { return this['label']; }
  @HostBinding('name') get _name() { return this['name']; }
  @HostBinding('size') get _size() { return this['size']; }
  @HostBinding('spin') get _spin() { return this['spin']; }
  @HostBinding('spinDuration') get _spinDuration() { return this['spinDuration']; }
  @HostBinding('actionIcon') get _actionIcon() { return this['actionIcon']; }
  @HostBinding('version') get _version() { return this['version']; }

}
