import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { CommonModule } from '@angular/common';
import { CopyClipboardService } from '../../services/copy-clipboard.service';
import { IEquation } from '../../interfaces/equations.interface';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent implements OnInit, OnDestroy {
  public equasions!: IEquation[];

  private _historyService = inject(HistoryService);
  private _copyToClipboardService = inject(CopyClipboardService);
  private _timeout: any;

  @ViewChild('clipboardContainer') clipboardContainer!: ElementRef;
  ngOnInit(): void {
    this.equasions = this._historyService.getEquations();
  }

  public copyToClipboard(result: Event): void {
    this._copyToClipboardService.copyToClipboard(
      (result.target as HTMLParagraphElement).getAttribute(
        'data-result'
      ) as string
    );

    (this.clipboardContainer.nativeElement as HTMLDivElement)?.classList.add(
      'show'
    );
    this._timeout = setTimeout(() => {
      (
        this.clipboardContainer.nativeElement as HTMLDivElement
      )?.classList.remove('show');
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  }
}
