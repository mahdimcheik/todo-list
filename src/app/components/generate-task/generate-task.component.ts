import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-generate-task',
  templateUrl: './generate-task.component.html',
  styleUrl: './generate-task.component.scss',
})
export class GenerateTaskComponent {
  newTask: string = '';
  sendTask = inject(TaskService);
  addTask() {
    this.sendTask.transmitter.next(this.newTask);
  }
}
