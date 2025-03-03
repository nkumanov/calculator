import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  EActionElementType,
  IActionElementType,
} from '../../interfaces/action-element.model';

@Component({
  selector: 'app-action-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-element.component.html',
  styleUrl: './action-element.component.scss',
})
export class ActionElementComponent {
  @Input() actionElementData!: IActionElementType;
  @Output() action = new EventEmitter<{
    actionType: EActionElementType;
    value: string;
  }>();

  public actionTypes = EActionElementType;

  public handleAction(event: MouseEvent): void {
    const button = event.target as HTMLButtonElement;
    const actionType =
      this.actionTypes[
        button.getAttribute('actionType') as keyof typeof EActionElementType
      ];
    let value = button.value;

    this.action.emit({ actionType, value });
  }
}
