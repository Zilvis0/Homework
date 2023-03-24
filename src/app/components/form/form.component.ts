import { Component } from '@angular/core';

interface FormData {
  income: number;
  requestedAmount: number;
  loanTerm: number;
  children: string;
  coapplicant: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formData: FormData = {
    income: 500,
    requestedAmount: 20000,
    loanTerm: 36,
    children: 'NONE',
    coapplicant: 'NONE',
  };
}
