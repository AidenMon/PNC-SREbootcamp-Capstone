import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer.model';
import { Account } from '../models/account.model';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'wmf-transfer-overview',
  templateUrl: './transfer-overview.component.html',
  styleUrls: ['./transfer-overview.component.scss']
})
export class TransferOverviewComponent {
  activeItem = 1; // Initially, the first item is active
  selectedAccount:Account | undefined;
  customer: Customer | null
  accounts: Account[]=[];
  view:string;
  
  constructor(
      private customerSvc:CustomerService,
      private accountSvc:AccountService,
      private router:Router,
      private transactionSvc:TransactionService,){
    this.view='';
    this.customer=null;
  }
  ngOnInit(){
    this.customerSvc.getCustomer().subscribe( response => {
      this.customer=response;
    });  
    this.accounts=this.customerSvc.tryReturnAccounts();


    //load transactions
    // this.transactionSvc.fetchTransactions().subscribe({
    //   next:()=>this.transactionSvc.getTransactions().subscribe({
    //     next:(loadedTransactions)=>{
    //       this.accountTransactions=loadedTransactions;
    //       //organize by date
    //       //console.log(loadedTransactions?.at(0)?.transactionId)
    //       loadedTransactions?.forEach((transaction)=>{
    //         this.dateIds[transaction.date]= 
    //         `${transaction.transactionId},${this.dateIds[transaction.date]}`
    //       })
    //       //console.log(this.dateIds)
    //     }
    //   })
    // })
  }
  onSubmit(){
    //this.router.navigate(['/transferdetails'],{queryParams:{view:this.selectedAccount.accountNumber}});
  }
  async onSelectionChange(selected:string){
    await new Promise(f => setTimeout(f, 300));
    this.router.navigate(['/transferdetails'],{queryParams:{view:""+selected}});
    //console.log("Selected Value: " + selected)    
  }
  setActive(itemId: number) {
    this.activeItem = itemId;
  }
}
