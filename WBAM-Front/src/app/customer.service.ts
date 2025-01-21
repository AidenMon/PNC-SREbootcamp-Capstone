import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Customer } from './models/customer.model';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from './models/authtoken.model';
import { Account } from './models/account.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiServerUrl='';
  private user: BehaviorSubject<Customer | null>;
  
  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<Customer | null>(null);
   }

   getCustomer():Observable<Customer|null>{
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

   getCustomerAccounts(customerId:number|undefined):Observable<Account[]>{
    return this.http
    .get<Account[]>(`/api/customer/find/${customerId}/accounts`)
   }
}
