import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CopyClipboardService {
  constructor() {}

  public copyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
  }
}
