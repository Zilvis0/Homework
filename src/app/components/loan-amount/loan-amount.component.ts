import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.component.html',
  styleUrls: ['./loan-amount.component.scss'],
})
export class LoanAmountComponent {
  @Input() loanAmount: number = 0;

  getDisplayedLoanAmount(): string {
    return (this.loanAmount / 1000).toFixed(0);
  }
}
