import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, ReplaySubject, tap } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  url='/api/customer/find/'+ sessionStorage.getItem('customerId') +'/accounts';
  private accountData=new BehaviorSubject<Account[]|null>(null);

  constructor(private http:HttpClient){}

  getAccountData(): Observable<Account[]|null>{
    console.log(this.accountData.next)
    return this.accountData;
  }

  loadAccountData():Observable<Account[]>{
    console.log('-----\n'+this.url+'\n----------------------------')
    return this.http.get<any>(this.url)
    .pipe(map((loadedAccounts:Account[])=>{
      this.accountData.next(loadedAccounts);
      return loadedAccounts;
    })
      
    )
  }
}
