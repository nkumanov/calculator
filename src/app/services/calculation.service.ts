import { Injectable, inject, input } from '@angular/core';
import { evaluate, exp } from 'mathjs';
import { EActionElementType } from '../interfaces/action-element.model';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { HistoryService } from './history.service';
import { ISingleOperation } from '../interfaces/equations.interface';
import { calculatorExpressionValidator } from '../validators/input-validator.validator';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  public lastResult = new Subject<string>();
  private _actionTypes = EActionElementType;
  private _historyService = inject(HistoryService);
  constructor() {}

  public proccessInput(
    action: ISingleOperation,
    inputControl: FormControl<string>
  ) {
    switch (action.actionType) {
      case this._actionTypes.EQUALITY:
        {
          this._handleEquality(inputControl);
        }
        break;
      case this._actionTypes.CLEAR:
        {
          this._handleClearInput(inputControl);
        }
        break;
      case this._actionTypes.CONTENT:
        {
          this._handleContentInput(inputControl, action);
        }
        break;
      default: {
        const currentValue = inputControl.value;
        inputControl.patchValue(currentValue + action.value);
        inputControl.updateValueAndValidity();
      }
    }
  }

  private _handleClearInput(inputControl: FormControl): void {
    inputControl.reset();
    inputControl.setValidators([]);
    inputControl.setValue('');
    inputControl.updateValueAndValidity();
  }

  private _handleContentInput(
    inputControl: FormControl<string>,
    action: ISingleOperation
  ): void {
    const currentValue = inputControl.value;
    inputControl.patchValue(currentValue + action.value);
    inputControl.updateValueAndValidity();
  }

  private _handleEquality(inputControl: FormControl<string>): void {
    const expression = inputControl.value.trim();
    if (!expression) return;

    inputControl.addValidators([calculatorExpressionValidator]);
    inputControl.updateValueAndValidity();

    if (!inputControl.valid) return;

    const result = evaluate(expression);
    if (isNaN(Number(result))) return;

    const equation = `${expression}=${result}`;
    inputControl.setValue(result);
    this.lastResult.next(equation);
    this._historyService.saveEquation({ equation, result });

    inputControl.setValidators([]);
    inputControl.updateValueAndValidity();
  }
}
