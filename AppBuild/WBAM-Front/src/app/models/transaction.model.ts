export interface Transaction {
    transactionId: number;
    amount: number;
    date: string;
    status: number;
    details: string;
    category: string;
    service: string;
    accountNumber: number;
    balanceAtTransaction: number;
}
