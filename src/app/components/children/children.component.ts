import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent {
  @Input() children: string = 'NONE';
  @Output() childrenChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  updateChildren(value: string): void {
    this.children = value;
    this.childrenChange.emit(value);
  }
}
