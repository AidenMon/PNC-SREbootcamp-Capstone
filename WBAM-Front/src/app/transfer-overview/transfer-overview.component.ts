import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wmf-transfer-overview',
  templateUrl: './transfer-overview.component.html',
  styleUrls: ['./transfer-overview.component.scss']
})
export class TransferOverviewComponent {
  activeItem = 1; // Initially, the first item is active
  selectedAccount:any;
  accounts: any;
  view:string;
  constructor(){
    this.view='';
    this.accounts= [
      {
        account_number: "1123456789",
        account_type: "PNC cash rewards",
        routing_number: "876543219",
        balance: 1541.65,
        created_date: "9-15-2009",
        branch_id: 10,
        international_swift_code: "123XY87",
        Over_Draft: false,
        Low_Bal: 100,
        customer_id: 1,
      },
      {
        account_number: "1345678902",
        account_type: "Virtual Wallet Spend",
        routing_number: "67131219",
        balance: 243,
        created_date: "1-22-2020",
        branch_id: 10,
        international_swift_code: "322XY55",
        Over_Draft: false,
        Low_Bal: -1,
        customer_id: 1,
      }
    ];
  }
  onSubmit(){

  }
  setActive(itemId: number) {
    this.activeItem = itemId;
  }
}
