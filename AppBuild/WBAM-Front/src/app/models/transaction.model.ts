export interface Transaction {
    transactionId: number;
    accountId:number;
    amount: number;
    date: string;
    status: number;
    details: string;
    category: string;
    service: string;
    accountNumber: string;
    balanceAtTransaction: number;
}
