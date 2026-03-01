import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-scrollable/index.js';

@Directive({
  selector: 'vscode-scrollable',
  standalone: true
})
export class VscodeScrollableDirective {
  @Input() alwaysVisible?: boolean;
  @Input() fastScrollSensitivity?: number;
  @Input() minThumbSize?: number;
  @Input() mouseWheelScrollSensitivity?: number;
  @Input() shadow?: boolean;
  @Input() scrolled?: boolean;
  @Input() scrollPos?: number;
  @Input() scrollMax?: number;
  @Input() version?: string;


  @HostBinding('alwaysVisible') get _alwaysVisible() { return this['alwaysVisible']; }
  @HostBinding('fastScrollSensitivity') get _fastScrollSensitivity() { return this['fastScrollSensitivity']; }
  @HostBinding('minThumbSize') get _minThumbSize() { return this['minThumbSize']; }
  @HostBinding('mouseWheelScrollSensitivity') get _mouseWheelScrollSensitivity() { return this['mouseWheelScrollSensitivity']; }
  @HostBinding('shadow') get _shadow() { return this['shadow']; }
  @HostBinding('scrolled') get _scrolled() { return this['scrolled']; }
  @HostBinding('scrollPos') get _scrollPos() { return this['scrollPos']; }
  @HostBinding('scrollMax') get _scrollMax() { return this['scrollMax']; }
  @HostBinding('version') get _version() { return this['version']; }

}
