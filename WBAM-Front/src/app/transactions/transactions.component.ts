import { Component, Input } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'wmf-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  @Input() date!:any;
  @Input() transactionIds!:any;
  @Input() transactions!:Transaction[]|null
  transactionsByDate:Transaction[]=[];
  splitIds:string[]=[];

  constructor(
    private transactionSvc:TransactionService,){}
  ngOnInit(){
    this.splitIds=this.transactionIds.split(',');
  }
  getTransactionsByDate():Transaction[]{
    this.transactionsByDate=[];
    this.transactions?.forEach((transaction)=>{
      if(this.splitIds.includes(transaction.transactionId.toString()))
        this.transactionsByDate.push(transaction)
    })
    //console.log(this.transactionsByDate)
    return this.transactionsByDate;
  }
  translateDate(){
    var splitDate:string[]=this.date.split('-');
    var out="";
    switch (splitDate.at(0)) {
      case '1':
        out="January "; break;
      case '2':
        out="February "; break;
      case '3':
        out="March "; break;
      case '4':
        out="April "; break;
      case '5':
        out="May "; break;
      case '6':
          out="June "; break;
      case '7':
        out="July "; break;
      case '8':
        out="August "; break;
      case '9':
        out="September "; break;
      case '10':
        out="October "; break;
      case '11':
        out="November "; break;
      case '12':
          out="December "; break;
    }
    out+=splitDate.at(1)+", "+splitDate.at(2);
    return out;
  }
}
