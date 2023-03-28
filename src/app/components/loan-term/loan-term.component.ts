import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loan-term',
  templateUrl: './loan-term.component.html',
  styleUrls: ['./loan-term.component.scss'],
})
export class LoanTermComponent {
  @Input() loanTerm: number = 0;
  @Output() loanTermChange = new EventEmitter<number>();

  constructor() {}

  updateLoanTerm(value: number): void {
    if (value >= 36 && value <= 360) {
      this.loanTerm = value;
      this.loanTermChange.emit(value);
    }
  }
}
