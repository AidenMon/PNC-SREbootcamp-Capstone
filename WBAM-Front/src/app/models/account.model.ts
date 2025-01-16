export class Account {
    account_number: string;
    account_type: string;
    routing_number: string;
    balance: number;
    created_date: string;
    branch_id: number;
    international_swift_code: string;
    Over_Draft: boolean;
    Low_Bal: number;
    customer_id: number;
    constructor(
        account_number: string,
        account_type: string,
        routing_number: string,
        balance: number,
        created_date: string,
        branch_id: number,
        international_swift_code: string,
        Over_Draft: boolean,
        Low_Bal: number,
        customer_id: number
    ){
    this.account_number = account_number;
    this.account_type = account_type;
    this.routing_number = routing_number;
    this.balance = balance;
    this.created_date = created_date;
    this.branch_id = branch_id;
    this.international_swift_code = international_swift_code;
    this.Over_Draft = Over_Draft;
    this.Low_Bal = Low_Bal;
    this.customer_id = customer_id;
    }
}
