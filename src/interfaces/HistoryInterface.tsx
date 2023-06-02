import { GridColDef } from "@mui/x-data-grid";
import RequestHistory from '../pages/RequestHistory';

export interface DataTableProps {
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

  export interface RequestHistory {
    id: number;
    supplier: string;
    invoice: string;
    status: string;
  }