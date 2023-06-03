export class RequestInterface {
  id?: number;
  ammount!: number;
  invoiceNumber!: string;
  exchangeRate?: number;
  emmissionDate!: string;
  expirationDate!: string;
  currency!: string;
  expenseType!: string;
  providerId!: number;
  paymentType!: string;
  userId!: number;
  state!: string;
  createdAt?: Date;
  updatedAt?: Date;
  billId!: number;
  specialCategory!: string;
  billType!: string;
}
