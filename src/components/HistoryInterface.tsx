import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface DataTableProps {
  rows: {
    id: number;
    supplier: string;
    invoice: string;
    status: string;
    downInv?: any;
    actions?: any;
  }[];
  columns: GridColDef[];
}

const DataTable: React.FC<DataTableProps> = ({ rows, columns }) => {
  return (
    <div style={{ height: 400, width: "100%", maxWidth: 1200, marginBottom: 50}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
       
      />
    </div>
  );
};

export default DataTable;
