import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { sizeHeight } from '@mui/system';

interface DataTableProps {
  rows: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[];
  columns: GridColDef[];
}

const DataTable: React.FC<DataTableProps> = ({ rows, columns }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
