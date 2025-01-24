import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Transaction } from './models/transaction.model';
import { HttpClient } from '@angular/common/http';

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
  fetchTransactions(accountNumber:string):Observable<Transaction[]>{
    return this.http
    .get<Transaction[]>(`/api/transaction/${accountNumber}/all`)
    .pipe(map((gotTransactions:Transaction[])=>{
      this.transactions.next(gotTransactions)
      return gotTransactions;
    }))
  }

}
