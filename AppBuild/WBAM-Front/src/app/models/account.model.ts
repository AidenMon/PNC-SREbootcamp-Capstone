export interface Account {
    accountNumber: string;
    accountType: string;
    routingNumber: string;
    balance: number;
    createdDate: string;
    branchId: number;
    internationalSwiftCode: string;
    overDraft: boolean;
    lowBal: number;
    customerId: number;
}
