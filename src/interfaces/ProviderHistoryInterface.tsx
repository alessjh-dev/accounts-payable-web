import { GridColDef } from "@mui/x-data-grid";

export interface ProviderHistoryInterface {
    rows: {
      name: string;
      state: string;
      phone: string;
      email?: string;
      nit?: string;
      lineOfBusiness: string;
      actions: any;
    }[];
    columns: GridColDef[];
  }