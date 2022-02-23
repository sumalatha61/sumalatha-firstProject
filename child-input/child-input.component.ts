import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent {

  @Input('fruitName') fruitName: string;

  constructor() { }
}
