import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import '@vscode-elements/elements/dist/vscode-label/index.js';

@Directive({
  selector: 'vscode-label',
  standalone: true
})
export class VscodeLabelDirective {
  @Input() htmlFor?: string;
  @Input() id?: string;
  @Input() required?: boolean;
  @Input() version?: string;


  @HostBinding('htmlFor') get _htmlFor() { return this['htmlFor']; }
  @HostBinding('id') get _id() { return this['id']; }
  @HostBinding('required') get _required() { return this['required']; }
  @HostBinding('version') get _version() { return this['version']; }

}
