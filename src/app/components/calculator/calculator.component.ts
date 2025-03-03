import { Component, inject } from '@angular/core';
import {
  EActionElementType,
  actionElements,
} from '../../interfaces/action-element.model';
import { CalculationService } from '../../services/calculation.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalcInputControlDirective } from '../../directives/calc-input-control.directive';
import { ActionElementComponent } from '../action-element/action-element.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CalcInputControlDirective,
    ActionElementComponent,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  public actionElements = actionElements;
  public actionTypes = EActionElementType;
  public calcService = inject(CalculationService);
  public calcForm = new FormGroup({
    calcInput: new FormControl('', []),
  });

  public handleActionItem(userInput: {
    actionType: EActionElementType;
    value: string;
  }): void {
    const inputControl = this.calcForm.controls.calcInput as FormControl;
    this.calcService.proccessInput(userInput, inputControl);
  }
}
