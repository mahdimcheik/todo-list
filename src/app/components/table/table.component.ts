import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  titre: string = 'Nouvelle table';
  tasks: string[] = ['Task 1', 'Task 2'];
  newTask: string = '';

  getTask = inject(TaskService).transmitter.subscribe((val: string) => {
    this.tasks = [...this.tasks, val];
  });
}
