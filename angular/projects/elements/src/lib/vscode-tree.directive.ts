import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-tree/index.js';

@Directive({
  selector: 'vscode-tree',
  standalone: true
})
export class VscodeTreeDirective {
  @Input() active?: boolean;
  @Input() branch?: boolean;
  @Input() hasActiveItem?: boolean;
  @Input() hasSelectedItem?: boolean;
  @Input() open?: boolean;
  @Input() level?: number;
  @Input() selected?: boolean;
  @Input() path?: any;
  @Input() version?: string;


  @HostBinding('active') get _active() { return this['active']; }
  @HostBinding('branch') get _branch() { return this['branch']; }
  @HostBinding('hasActiveItem') get _hasActiveItem() { return this['hasActiveItem']; }
  @HostBinding('hasSelectedItem') get _hasSelectedItem() { return this['hasSelectedItem']; }
  @HostBinding('open') get _open() { return this['open']; }
  @HostBinding('level') get _level() { return this['level']; }
  @HostBinding('selected') get _selected() { return this['selected']; }
  @HostBinding('path') get _path() { return this['path']; }
  @HostBinding('version') get _version() { return this['version']; }

}
