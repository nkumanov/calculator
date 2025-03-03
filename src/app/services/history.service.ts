import { Injectable } from '@angular/core';
import { IEquation } from '../interfaces/equations.interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor() {}

  public saveEquation(equation: IEquation) {
    const equations: IEquation[] = JSON.parse(
      localStorage.getItem('equations') || '[]'
    );
    equations.push(equation);
    localStorage.setItem('equations', JSON.stringify(equations));
  }

  public getEquations(): IEquation[] {
    return JSON.parse(localStorage.getItem('equations') || '[]').reverse();
  }
}
