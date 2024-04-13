import { Component, ViewChild } from '@angular/core';
import { SimpleTaskComponent } from '../simple-task/simple-task.component';
export type Task = { id: number; task: string };
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  titre: string = 'Nouvelle table';
  tasks: Task[] = [
    { id: 1, task: 'Task 1' },
    { id: 2, task: 'Task 2' },
  ];
  newTask: string = '';
  @ViewChild('simpletask') simpletask!: SimpleTaskComponent;

  showEdit: boolean = false;
  addTask() {
    this.showEdit = !this.showEdit;
    if (!this.showEdit && this.newTask.length > 0) {
      console.log('ASdded');
      this.tasks.push({
        task: this.newTask,
        id: this.tasks[this.tasks.length - 1].id + 1,
      });
      console.log(this.tasks);
    }
  }
  deleteTask(id: number) {
    this.simpletask.print(id);
    console.log(id);
    this.tasks = this.tasks.filter((ele) => ele.id != id);
  }
}
