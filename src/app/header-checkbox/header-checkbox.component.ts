import { Component, Input, OnInit } from '@angular/core';
import { IHeaderGroupParams } from 'ag-grid-community';

import { TaskService } from '../repository/task/task.service';

@Component({
  selector: 'app-header-checkbox',
  templateUrl: './header-checkbox.component.html',
  styleUrls: ['./header-checkbox.component.scss'],
})
export class HeaderCheckboxComponent implements OnInit {
  public params: IHeaderGroupParams;

  constructor(public taskService: TaskService) {}

  ngOnInit() {}

  agInit(params: any): void {
    this.params = params;
  }

  toggleSelection() {
    this.taskService.isSelectedAll ? this.params.api.selectAll() : this.params.api.deselectAll();
  }
}
