import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  @Input() income: number = 0;
  @Output() incomeChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  updateIncome(value: number): void {
    this.income = value;
    this.incomeChange.emit(value);
  }

  getDisplayedIncome(): string {
    return (this.income / 1000).toFixed(0);
  }

  convertDisplayedIncome(displayedIncome: string): void {
    this.income = parseInt(displayedIncome) * 1000;
    this.incomeChange.emit(this.income);
  }
}
