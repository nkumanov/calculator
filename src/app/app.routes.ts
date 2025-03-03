import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';

export const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./components/history/history.component').then(
        (c) => c.HistoryComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'calculator',
  },
];
