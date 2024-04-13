import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoTasks: string[] = [];

  getTodo = inject(TaskService).clicker.subscribe((val: string) => {
    this.todoTasks = [...this.todoTasks, val];
  });
}
