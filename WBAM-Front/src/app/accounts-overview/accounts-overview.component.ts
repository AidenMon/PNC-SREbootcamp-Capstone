import { Component, Input } from '@angular/core';
import { Account } from '../models/account.model';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer.model';
import { AccountService } from '../zzOLD_BROKEN_FILES/account.service';

@Component({
  selector: 'wmf-accounts-overview',
  templateUrl: './accounts-overview.component.html',
  styleUrls: ['./accounts-overview.component.scss']
})
export class AccountsOverviewComponent {
  
  customer: Customer | null
  accounts: Account[]|null=[];
  accounts2: Account[]|null=[];
  constructor(
      private customerSvc:CustomerService,
      private accountSvc:AccountService){
    this.customer=null;
  }
  ngOnInit(){
    this.customerSvc.getCustomer().subscribe( response => {
      this.customer=response;
    });

    document.cookie ="customer="+`${this.customer?.customerId}`;
    sessionStorage.setItem('customerId', ''+this.customer?.customerId)

    // this.customerSvc.getCustomerAccounts(this.customer?.customerId).subscribe(
    //   response=>{this.accounts=response}
    // )
    this.customerSvc.getAccounts2().subscribe(
      response=>{this.accounts=response}
    )
    console.log(this.accountSvc.getAccountData())
  }
  
  
}
