import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  @Input() income: number = 0;
  @Output() incomeChange = new EventEmitter<number>();
  @Input() isHighlighted: boolean = false;
  @Input() errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

  updateIncome(value: number): void {
    this.income = value * 1000;
    this.incomeChange.emit(value * 1000);
  }

  highlightError(): void {
    this.isHighlighted = true;
  }
}
