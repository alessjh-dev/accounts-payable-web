import * as React from 'react';
import DataTable from './../components/HistoryInterface';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'age', headerName: 'Age', width: 90 },
  { field: 'email', headerName: 'Email', width: 200 },
];

const rows = [
  { id: 1, name: 'John Smith', age: 25, email: 'john.smith@gmail.com' },
  { id: 2, name: 'Jane Doe', age: 30, email: 'jane.doe@gmail.com' },
  { id: 3, name: 'Bob Johnson', age: 40, email: 'bob.johnson@gmail.com' },
  { id: 4, name: 'Mary Brown', age: 35, email: 'mary.brown@gmail.com' },
  { id: 5, name: 'James Davis', age: 45, email: 'james.davis@gmail.com' },
];

const History: React.FC = () => {
  return <DataTable rows={rows} columns={columns} />;
};

export default History;
