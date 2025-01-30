import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, ReplaySubject, tap } from 'rxjs';
import { Account } from './models/account.model';
import { environment } from './envrionment';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  url='/api/account/find/'+ sessionStorage.getItem('customerId');
  private accountData=new BehaviorSubject<Account[]|null>(null);
  data$=this.accountData.asObservable();

  constructor(private http:HttpClient){}

  getAccountData(): Observable<Account[]|null>{
    console.log(this.accountData.next)
    return this.accountData;
  }

//   loadAccountData(){
//     //console.log('-----\n'+this.url+'\n----------------------------')
//     this.http.get<any>(`${environment.api_base_url}/api/account/find/2`)
//     .pipe()
//     .subscribe(data=>{
//       this.accountData.next(data);
//     });
//   }
}
