import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { Task } from '../table/table.component';

@Component({
  selector: 'app-simple-task',
  templateUrl: './simple-task.component.html',
  styleUrl: './simple-task.component.scss',
})
export class SimpleTaskComponent {
  @Input()
  details: Task = { id: 0, task: '' };
  @Output()
  eventEmitter: EventEmitter<number> = new EventEmitter();
  delete() {
    this.eventEmitter.emit(this.details.id);
  }
  print(id: number) {
    console.log(id);
  }
}
