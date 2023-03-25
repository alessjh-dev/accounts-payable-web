import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ProviderHistoryInterface } from '../interfaces/ProviderHistoryInterface';



const ProviderDatatable: React.FC<ProviderHistoryInterface> = ({ rows, columns }) => {
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

export default ProviderDatatable;
