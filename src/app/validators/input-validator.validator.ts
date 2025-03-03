import { AbstractControl, ValidationErrors } from '@angular/forms';

export function calculatorExpressionValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;
  const validPattern =
    /^(-?(0|[1-9][0-9]*)(\.[0-9]+)?)( *[\+\-\*\/\%] *(0|[1-9][0-9]*)(\.[0-9]+)?)+$/g;
  if (!validPattern.test(value)) {
    return { invalidCharacters: true };
  }
  return null;
}
