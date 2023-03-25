import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DataTableProps } from '../interfaces/HistoryInterface';



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
