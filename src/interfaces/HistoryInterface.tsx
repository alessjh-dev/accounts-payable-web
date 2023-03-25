import { GridColDef } from "@mui/x-data-grid";

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