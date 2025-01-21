import { Component } from '@angular/core';
import { Account } from '../models/account.model';

@Component({
  selector: 'wmf-accounts-overview',
  templateUrl: './accounts-overview.component.html',
  styleUrls: ['./accounts-overview.component.scss']
})
export class AccountsOverviewComponent {
  accounts: any;
  constructor(){
    this.accounts= [
      {
        accountNumber: "1123456789",
        accountType: "PNC cash rewards",
        routingNumber: "876543219",
        balance: 1541.65,
        createdDate: "9-15-2009",
        branchId: 10,
        internationalSwiftCode: "123XY87",
        overDraft: false,
        lowBal: 100,
        customerId: 1,
      },
      {
        accountNumber: "1345678902",
        accountType: "Virtual Wallet Spend",
        routingNumber: "67131219",
        balance: 243,
        createdDate: "1-22-2020",
        branchId: 10,
        internationalSwiftCode: "322XY55",
        overDraft: false,
        lowBal: -1,
        customerId: 1,
      }
    ];
  }
}
