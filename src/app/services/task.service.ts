import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  transmitter = new Subject<string>();
  clicker = new Subject<string>();
  constructor() {}
}
