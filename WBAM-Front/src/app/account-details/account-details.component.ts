import { Component, Input } from '@angular/core';
import { Account } from '../models/account.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'wmf-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  accNumber:string='';
  account:Account | undefined;
  accountTransactions:Transaction[]|null=[];
  dateIds:any={}
  constructor(
    private titleService:Title,
    private route: ActivatedRoute,
    private customerSvc:CustomerService,
    private router: Router,
    private transactionSvc:TransactionService,)
    {
    
  }
  ngOnInit(){
    //load account from query Param
    this.accNumber=this.route.snapshot.queryParams['view']
    console.log(this.accNumber);
    this.customerSvc.tryReturnAccounts().forEach((loadAccount)=>{
      if(loadAccount.accountNumber==this.accNumber)
        this.account=loadAccount;
    })
    console.log(this.account);

    //load transactions
    this.transactionSvc.fetchTransactions(this.accNumber).subscribe({
      next:()=>this.transactionSvc.getTransactions().subscribe({
        next:(loadedTransactions)=>{
          this.accountTransactions=loadedTransactions;
          //organize by date
          console.log(loadedTransactions?.at(0)?.transactionId)
          loadedTransactions?.forEach((transaction)=>{
            this.dateIds[transaction.date]= 
            `${transaction.transactionId},${this.dateIds[transaction.date]}`
          })
          //console.log(this.dateIds)
        }
      })
    })

  }
  routeBack(){
    this.router.navigate(['']);
  }
}
