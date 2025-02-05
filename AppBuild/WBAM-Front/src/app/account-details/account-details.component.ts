import { Component, Input } from '@angular/core';
import { Account } from '../models/account.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../transaction.service';
import { KeyValue, Location } from '@angular/common';

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
  displayInfo:boolean=false;
  displayRoutingInfo:boolean=false;
  reverseOrder = 
    (x: KeyValue<string, any>, y: KeyValue<string, any>): number => {
    return -1
  }
  constructor(
    private titleService:Title,
    private route: ActivatedRoute,
    private customerSvc:CustomerService,
    private _location: Location,
    private transactionSvc:TransactionService,)
    {
    
    }
  ngOnInit(){
    //load account from query Param
    this.accNumber=this.route.snapshot.queryParams['view']
    
    //console.log(this.accNumber);
    this.customerSvc.tryReturnAccounts().forEach((loadAccount)=>{
      if(loadAccount.accountNumber==this.accNumber)
        this.account=loadAccount;
    })

    //Set Page Title
    var accType = this.account?.accountType.substring(this.account!.accountType.lastIndexOf(" ")+1);
    var accountNameSubstr=this.account?.accountType.substring(0,(12-accType!.length))+"..."+accType;
    var title = accountNameSubstr+" x"+this.account?.accountNumber.substring(this.account?.accountNumber.length-4,this.account?.accountNumber.length)
    this.titleService.setTitle(title);
    
    //load transactions
    this.transactionSvc.fetchTransactions(this.accNumber).subscribe({
      next:()=>this.transactionSvc.getTransactions().subscribe({
        next:(loadedTransactions)=>{
          this.accountTransactions=loadedTransactions;

          //organize by date
          loadedTransactions?.forEach((transaction)=>{
            this.dateIds[transaction.date]= 
            `${transaction.transactionId},${this.dateIds[transaction.date]}`
          })
          console.log(this.dateIds)
        }
      })
    })

  }
  toggleInfo(){
    this.displayInfo=!this.displayInfo;
  }
  showRouting(){
    this.displayRoutingInfo=!this.displayRoutingInfo;
  }
  routeBack(){
    //this.router.navigate(['']);
    this._location.back();
  }
}
