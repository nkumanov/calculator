import { EActionElementType } from './action-element.model';

export interface IEquation {
  equation: string;
  result: string;
}

export interface ISingleOperation {
  actionType: EActionElementType;
  value: string;
}

export const validKeys = [
  'ArrowRight',
  'ArrowLeft',
  'Backspace',
  'Delete',
  'Tab',
  'Enter',
  '-',
  '/',
  '*',
  '+',
  '.',
  '%',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];
