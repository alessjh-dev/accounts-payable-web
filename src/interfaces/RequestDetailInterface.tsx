export class RequestInterface {
    requestId!: number;
    documentNumber!: string;
    ammount!: number;
    providerName!: string;
    documentDate!: Date;
    expenseType!: string;
    currency!: string;
    exchangeRate?: number;
    paymentType!: string;
    status!: string;
    documentFileId!: string;
}