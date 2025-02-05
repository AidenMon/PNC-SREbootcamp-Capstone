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
    var out=this.getMonthText(splitDate);
    
    if(splitDate.at(0)?.length==2){
      out+=splitDate.at(1)+", "+splitDate.at(2);
    }
    else{
      out+=splitDate.at(2)+", "+splitDate.at(0);
    }
    return out;
  }
  getMonthText(splitDate:string[]){
    var out="";
    //MM-DD-YYYY
    if(splitDate.at(0)?.length==2){
      switch (splitDate.at(0)) {
        case '1':
        case '01':
          out="January "; break;
        case '2':
        case '02':
          out="February "; break;
        case '3':
        case '03':
          out="March "; break;
        case '4':
        case '04':
          out="April "; break;
        case '5':
        case '05':
          out="May "; break;
        case '6':
        case '06':
            out="June "; break;
        case '7':
        case '07':
          out="July "; break;
        case '8':
        case '08':
          out="August "; break;
        case '9':
        case '09':
          out="September "; break;
        case '10':
          out="October "; break;
        case '11':
          out="November "; break;
        case '12':
            out="December "; break;
      }
    }
    //YYYY-MM-DD
    else{
      switch (splitDate.at(1)) {
        case '1':
        case '01':
          out="January "; break;
        case '2':
        case '02':
          out="February "; break;
        case '3':
        case '03':
          out="March "; break;
        case '4':
        case '04':
          out="April "; break;
        case '5':
        case '05':
          out="May "; break;
        case '6':
        case '06':
            out="June "; break;
        case '7':
        case '07':
          out="July "; break;
        case '8':
        case '08':
          out="August "; break;
        case '9':
        case '09':
          out="September "; break;
        case '10':
          out="October "; break;
        case '11':
          out="November "; break;
        case '12':
            out="December "; break;
      }
    }
    return out;
  }
}
