export class Account {
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
    constructor(
        account_number: string,
        account_type: string,
        routing_number: string,
        balance: number,
        created_date: string,
        branch_id: number,
        international_swift_code: string,
        over_draft: boolean,
        low_bal: number,
        customer_id: number
    ){
    this.accountNumber = account_number;
    this.accountType = account_type;
    this.routingNumber = routing_number;
    this.balance = balance;
    this.createdDate = created_date;
    this.branchId = branch_id;
    this.internationalSwiftCode = international_swift_code;
    this.overDraft = over_draft;
    this.lowBal = low_bal;
    this.customerId = customer_id;
    }
}
