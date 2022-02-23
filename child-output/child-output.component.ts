import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent {
  @Output() newItemEvent = new EventEmitter();

  addNewItem(item: string) {
    return this.newItemEvent.emit(item);
  }
}
