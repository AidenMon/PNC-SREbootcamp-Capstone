import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, map, Observable, tap } from 'rxjs';
import { Customer } from './models/customer.model';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from './models/authtoken.model';
import { Account } from './models/account.model';
import { environment } from './envrionment'
import { FormGroup } from '@angular/forms';
import { TransactionService } from './transaction.service';
import { TransactionPost } from './models/transaction-post.model';

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
    //console.log(credentials);
    return this.http
      .post<Customer>(`${environment.api_base_url}/api/login`, credentials)
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
    .get<Account[]>(`${environment.api_base_url}/api/customer/find/${this.ID}/accounts`)
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
    return this.http.get<Account[]>(`${environment.api_base_url}/api/customer/find/${customerId}/accounts`)
   }
   
   tryTransfer(form:FormGroup){
    var from = form.controls['transferFrom'].value
    var amount = form.controls['transferAmount'].value
    var accTo = form.controls['transferTo'].value
    var transaction:TransactionPost={
      accountTo:accTo,
      accountFrom:from,
      amount:amount};
    console.log(transaction)
    return this.http.
    post<any>(`${environment.api_base_url}/api/customer/transfer`,transaction)
    
   }

  tryUpdatePhone(updatedPhone:string, customer:Customer|null){
    var updatedCustomer:Customer ={
      customerId:customer!.customerId,
      firstName:customer!.firstName,
      lastName:customer!.lastName,
      middleName:customer!.middleName,
      email:customer!.email,
      phone:updatedPhone,
      addressId:customer!.addressId,
    }
    return this.http.
    put<any>(`${environment.api_base_url}/api/customer/update`,updatedCustomer)
   }

}
