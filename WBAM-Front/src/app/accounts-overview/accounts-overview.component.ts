import { Component, Input } from '@angular/core';
import { Account } from '../models/account.model';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer.model';
import { AccountService } from '../account.service';
import { Title } from '@angular/platform-browser';
import { delay } from 'rxjs';
import { Section } from '../models/section.model';

@Component({
  selector: 'wmf-accounts-overview',
  templateUrl: './accounts-overview.component.html',
  styleUrls: ['./accounts-overview.component.scss']
})
export class AccountsOverviewComponent {
  
  customer: Customer | null
  accounts: Account[]|null=[];
  accounts2: Account[]|null=[];
  sections:Section[];
  constructor(
    private customerSvc:CustomerService,
    //private accountSvc:AccountService,
    private titleService:Title,)
    {
      this.customer=null;
      this.sections=[
        {
          sectionTitle:'',
          sectionItems:[
            {
              secItemIcon:'Zmoney-ico',
              secItemTitle:'',
              secItemDesc:'Send money with Zeebell',
              secItemArrow:true,
              secItemArrowOption:'',
              secItemLink:'error'
            },
          ]
        },
        {
          sectionTitle:'',
          sectionItems:[
            {
              secItemIcon:'pbank-ico',
              secItemTitle:'',
              secItemDesc:'My Offers & Products',
              secItemArrow:true,
              secItemArrowOption:'',
              secItemLink:'error'
            },
          ]
        },
        
      ]
  }
  ngOnInit(){
    this.customerSvc.getCustomer().subscribe( response => {
      this.customer=response;
    });
    this.titleService.setTitle('Account')
    document.cookie ="customer="+`${this.customer?.customerId}`;
    sessionStorage.setItem('customerId', ''+this.customer?.customerId)
    
    this.accounts2=this.customerSvc.tryReturnAccounts();
    
  }//end OnInit
  
  justWait(){
    delay(1000);
  }
}
