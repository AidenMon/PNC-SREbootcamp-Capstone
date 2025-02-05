import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Transaction } from './models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './envrionment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: BehaviorSubject<Transaction[]|null>;
  constructor(private http: HttpClient) {
    this.transactions = new BehaviorSubject<Transaction[]|null>(null);
  }

  getTransactions(){
    return this.transactions;
  }
  //get All Transactions of customer
  fetchTransactionsByCustomer(customerId:number):Observable<Transaction[]>{
    return this.http
    .get<Transaction[]>(`${environment.api_base_url}/api/transaction/all/${customerId}`)
    .pipe(map((gotTransactions:Transaction[])=>{
      this.transactions.next(gotTransactions)
      return gotTransactions;
    }))
  }
  //get specific account
  fetchTransactions(accountNumber:string):Observable<Transaction[]>{
    return this.http
    .get<Transaction[]>(`${environment.api_base_url}/api/transaction/${accountNumber}/all`)
    .pipe(map((gotTransactions:Transaction[])=>{
      this.transactions.next(gotTransactions)
      return gotTransactions;
    }))
  }

}
