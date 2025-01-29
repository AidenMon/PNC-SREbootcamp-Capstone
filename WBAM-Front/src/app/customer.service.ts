import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, map, Observable } from 'rxjs';
import { Customer } from './models/customer.model';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from './models/authtoken.model';
import { Account } from './models/account.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private user: BehaviorSubject<Customer | null>;
  private accs: BehaviorSubject<Account[] | null>;
  private ID:number=-1;
  private accounts:Account[]=[]
  
  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<Customer | null>(null);
    this.accs = new BehaviorSubject<Account[]| null>(null);
   }

   getCustomer():Observable<Customer|null>{
    // console.log("CustomerSvc -> GetCustomer out")
    // console.log(this.user)
    return this.user;
   }

   signIn(credentials:AuthToken):Observable<Customer>{
    return this.http
      .post<Customer>('/api/login', credentials)
      .pipe(map((loggedUser:Customer)=>{
        this.user.next(loggedUser);
        this.ID=loggedUser.customerId;
        //console.log(this.ID);
        return loggedUser;
      }));
   }
   tryLoadAccounts():Observable<Account[]>{
    //console.log("in Try Accts")
    return this.http
    .get<Account[]>(`/api/customer/find/${this.ID}/accounts`)
    .pipe(map((gotAccounts:Account[])=>{
      this.accs.next(gotAccounts);
      this.accounts=gotAccounts;
      return gotAccounts;
    }))
   }
   tryReturnAccounts(){
    //console.log(this.accounts)
    return this.accounts;
   }


   signOut(){
    this.user.next(null);
   }

   getCustomerAccounts(customerId:number|undefined){
    return this.http.get<Account[]>(`/api/customer/find/${customerId}/accounts`)
   }
   getAccounts2(){
    return this.http.get<Account[]>(`/api/customer/find/${sessionStorage.getItem('customerId')}/accounts`)
   }
   

}
