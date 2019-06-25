import { Component, Input, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import {
  StatusBar,
  ColumnsDefs,
  AutoGroupColumnDef,
  CheckboxToggleColumn,
  getDefaultContextMenuItems,
  getAdditionalContextMenuItem,
} from './agGridOptions';
import { TaskService } from '../repository/task/task.service';

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html',
  styleUrls: ['./my-grid-application.component.scss'],
})
export class MyGridApplicationComponent implements OnInit {
  private gridOptions: GridOptions;
  @Input() public isSelectable = false;

  constructor(public taskService: TaskService) {
    this.gridOptions = {} as GridOptions;

    this.gridOptions.rowData = taskService.getTasks();
    this.gridOptions.columnDefs = this.getColumnsDefs();

    this.gridOptions.statusBar = StatusBar;
    this.gridOptions.autoGroupColumnDef = AutoGroupColumnDef;
  }

  getColumnsDefs() {
    const additionalColumns = [];

    if (this.isSelectable) {
      additionalColumns.push(CheckboxToggleColumn);
    }

    return [...additionalColumns, ...ColumnsDefs];
  }

  toggleSelectMode() {
    this.gridOptions.api.deselectAll();
    this.gridOptions.api.setColumnDefs(this.getColumnsDefs());
  }

  onCellValueChanged(event) {
    this.taskService.isSelectedAll =
      event.columnApi.columnController.allDisplayedColumns.length ===
      event.api.getSelectedNodes().length;
  }

  getContextMenuItems(params) {
    const result: any = [...getDefaultContextMenuItems()];

    result.push(getAdditionalContextMenuItem(params));

    return result;
  }

  ngOnInit() {}
}
