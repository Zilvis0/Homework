import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loan-term',
  templateUrl: './loan-term.component.html',
  styleUrls: ['./loan-term.component.scss'],
})
export class LoanTermComponent {
  @Input() loanTerm: number = 36;
  @Output() loanTermChange = new EventEmitter<number>();

  updateLoanTerm(value: number): void {
    this.loanTerm = value;
    this.loanTermChange.emit(value);
  }
}
