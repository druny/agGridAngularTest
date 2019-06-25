import { Injectable, Input } from '@angular/core';

import { Task } from './task';
import { Tasks } from './mocked-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public checkedTasks = {};
  @Input() public isSelectedAll = false;

  constructor() {}

  getTasks(): Task[] {
    return Tasks;
  }
}
