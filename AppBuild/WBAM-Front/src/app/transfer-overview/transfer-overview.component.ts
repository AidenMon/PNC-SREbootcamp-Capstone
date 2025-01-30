import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer.model';
import { Account } from '../models/account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'wmf-transfer-overview',
  templateUrl: './transfer-overview.component.html',
  styleUrls: ['./transfer-overview.component.scss']
})
export class TransferOverviewComponent {
  activeItem = 1; // Initially, the first item is active
  selectedAccount:any;
  customer: Customer | null
  accounts: Account[]=[];
  view:string;
  
  constructor(
      private customerSvc:CustomerService,
      private accountSvc:AccountService){
    this.view='';
    this.customer=null;
  }
  ngOnInit(){
    this.customerSvc.getCustomer().subscribe( response => {
      this.customer=response;
    });
    
    // this.customerSvc.getCustomerAccounts( Number(localStorage.getItem('customerId')) ).subscribe(
    //   response=>{this.accounts=response
    //   }
    // )
   
    //this.accountSvc.getCustomerAccounts().subscribe(response=>{this.accounts=response})
  }
  onSubmit(){

  }
  setActive(itemId: number) {
    this.activeItem = itemId;
  }
}
