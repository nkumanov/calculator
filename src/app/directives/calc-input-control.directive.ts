import { Directive, HostListener } from '@angular/core';
import { validKeys } from '../interfaces/equations.interface';

@Directive({
  selector: '[appCalcInputControl]',
  standalone: true,
})
export class CalcInputControlDirective {
  constructor() {}

  private _allowedPattern =
    /^-?(0|[1-9][0-9]*)(\.[0-9]+)?( *[\+\-\*\/\%] *(0|[1-9][0-9]*)(\.[0-9]+)?)*$/g;

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!validKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const clipboardData = event.clipboardData?.getData('text') || '';
    if (!this._allowedPattern.test(clipboardData)) {
      event.preventDefault();
    }
  }
  @HostListener('drop', ['$event'])
  onInput(event: any) {
    if (!validKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
