import {
  Component,
  EventEmitter,
  Input,
  Output,
  Type,
  inject,
} from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-simple-task',
  templateUrl: './simple-task.component.html',
  styleUrl: './simple-task.component.scss',
})
export class SimpleTaskComponent {
  @Input()
  task = '';

  lol = inject(TaskService);

  onClick() {
    this.lol.clicker.next(this.task);
  }
}
