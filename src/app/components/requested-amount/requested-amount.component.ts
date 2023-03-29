import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-requested-amount',
  templateUrl: './requested-amount.component.html',
  styleUrls: ['./requested-amount.component.scss'],
})
export class RequestedAmountComponent implements OnInit {
  @Input() requestedAmount: number = 20000;
  @Output() requestedAmountChange = new EventEmitter<number>();
  @Input() isHighlighted: boolean = false;
  @Input() errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

  updateRequestedAmount(value: number): void {
    this.requestedAmount = value * 1000;
    this.requestedAmountChange.emit(value * 1000);
  }

  highlightError(): void {
    this.isHighlighted = true;
  }
}
