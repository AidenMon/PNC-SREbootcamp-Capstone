import { Component } from '@angular/core';
import { Account } from '../models/account.model';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'wmf-accounts-overview',
  templateUrl: './accounts-overview.component.html',
  styleUrls: ['./accounts-overview.component.scss']
})
export class AccountsOverviewComponent {
  
  customer: Customer | null
  accounts: Account[]=[];
  constructor(private customerSvc:CustomerService){
    this.customer=null;
  }
  ngOnInit(){
    this.customerSvc.getCustomer().subscribe( response => {
      this.customer=response;
    });
    this.customerSvc.getCustomerAccounts(this.customer?.customerId).subscribe( response => {
      this.accounts=response;
    })
  }
  whatId(){
    return this.customer?.customerId;
  }
}
