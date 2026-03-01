import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-split-layout/index.js';

@Directive({
  selector: 'vscode-split-layout',
  standalone: true
})
export class VscodeSplitLayoutDirective {
  @Input() split?: any;
  @Input() resetOnDblClick?: boolean;
  @Input() handleSize?: number;
  @Input() initialHandlePosition?: string;
  @Input() handlePosition?: any;
  @Input() fixedPane?: 'start'  |  'end'  |  'none';
  @Input() minStart?: string;
  @Input() minEnd?: string;
  @Input() version?: string;


  @HostBinding('split') get _split() { return this['split']; }
  @HostBinding('resetOnDblClick') get _resetOnDblClick() { return this['resetOnDblClick']; }
  @HostBinding('handleSize') get _handleSize() { return this['handleSize']; }
  @HostBinding('initialHandlePosition') get _initialHandlePosition() { return this['initialHandlePosition']; }
  @HostBinding('handlePosition') get _handlePosition() { return this['handlePosition']; }
  @HostBinding('fixedPane') get _fixedPane() { return this['fixedPane']; }
  @HostBinding('minStart') get _minStart() { return this['minStart']; }
  @HostBinding('minEnd') get _minEnd() { return this['minEnd']; }
  @HostBinding('version') get _version() { return this['version']; }

}
