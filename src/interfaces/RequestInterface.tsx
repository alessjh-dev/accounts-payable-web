export class RequestInterface {
    documentNumber!: string;
    amount!: number;
    providerName!: string;
    documentDate!: Date;
    expenseType!: string;
    currency!: string;
    exchangeRate?: number;
    paymentType!: string;
}