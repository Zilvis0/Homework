import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest-rate',
  templateUrl: './interest-rate.component.html',
  styleUrls: ['./interest-rate.component.scss'],
})
export class InterestRateComponent {
  @Input() interestRate: number = 0;

  getDisplayedInterestRate(): string {
    return (this.interestRate / 1000).toFixed(2);
  }
}
