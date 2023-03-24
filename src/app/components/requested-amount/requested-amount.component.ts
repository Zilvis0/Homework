import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-requested-amount',
  templateUrl: './requested-amount.component.html',
  styleUrls: ['./requested-amount.component.scss'],
})
export class RequestedAmountComponent implements OnInit {
  @Input() requestedAmount: number = 20000;
  @Output() requestedAmountChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  updateRequestedAmount(value: number): void {
    this.requestedAmount = value;
    this.requestedAmountChange.emit(value);
  }

  getDisplayedRequestedAmount(): string {
    return (this.requestedAmount / 1000).toFixed(0);
  }

  convertDisplayedRequestedAmount(displayedRequestedAmount: string): void {
    this.requestedAmount = parseInt(displayedRequestedAmount) * 1000;
    this.requestedAmountChange.emit(this.requestedAmount);
  }
}
