import { ColDef } from 'ag-grid-community';

import { LinkComponent } from '../link/link.component';
import { HeaderCheckboxComponent } from '../header-checkbox/header-checkbox.component';

export const CheckboxToggleColumn: ColDef = {
  width: 55,
  headerName: '',
  lockPosition: true,
  suppressMenu: true,
  checkboxSelection: true,
  headerComponentFramework: HeaderCheckboxComponent,
};

export const StatusBar = {
  statusPanels: [
    {
      statusPanel: 'agTotalRowCountComponent',
      align: 'left',
    },
    { statusPanel: 'agFilteredRowCountComponent' },
    { statusPanel: 'agSelectedRowCountComponent' },
    { statusPanel: 'agAggregationComponent' },
  ],
};

export const AutoGroupColumnDef = {
  headerName: 'Model',
  field: 'model',
  resizable: true,
  cellRenderer: 'agGroupCellRenderer',
  cellRendererParams: {
    checkbox: true,
  },
};

export const ColumnsDefs: ColDef[] | any = [
  {
    headerName: '',
    field: 'thumbnails',
  },
  {
    headerName: 'Video title',
    field: 'title',
    cellRendererFramework: LinkComponent,
  },
  {
    headerName: 'Description',
    field: 'description',
  },
  {
    headerName: 'Published on',
    field: 'publishedAt',
  },
];

export const getDefaultContextMenuItems = () => ['copy', 'copyWithHeaders', 'paste'];

export const getAdditionalContextMenuItem = (params) => {
  const FieldsItemsRelationship = {
    title: {
      name: 'Open in new tab',
      action: () => {
        window.open(`https://www.youtube.com/watch?v=${params.value}`, '_blank');
      },
    },
  };

  return FieldsItemsRelationship[params.column.userProvidedColDef.field] || {};
};
