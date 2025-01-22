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
  private accounts:Account[]=[]
  
  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<Customer | null>(null);
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
        return loggedUser;
      }));
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
