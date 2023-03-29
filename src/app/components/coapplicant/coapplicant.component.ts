import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-coapplicant',
  templateUrl: './coapplicant.component.html',
  styleUrls: ['./coapplicant.component.scss'],
})
export class CoapplicantComponent {
  @Input() coapplicant: string = 'NONE';
  @Output() coapplicantChange = new EventEmitter<string>();
  @Input() isHighlighted: boolean = false;
  @Input() errorMessage: string = '';

  constructor() {}

  updateCoapplicant(value: string): void {
    this.coapplicant = value;
    this.coapplicantChange.emit(value);
  }

  highlightError(): void {
    this.isHighlighted = true;
  }
}
