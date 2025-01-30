import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../models/customer.model';
import { AuthToken } from '../models/authtoken.model';
import { CustomerService } from '../customer.service';
import  packageJson from 'package.json';
import { Router } from '@angular/router';

@Component({
  selector: 'wmf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private tmpCustomer:Customer | null | undefined
  private version:string;
  constructor(
    private customerSvc:CustomerService,
    private router: Router,
    ){
      this.version=packageJson.version;}

  @Output() userLoggedIn = new EventEmitter();
  credentials: AuthToken={userId:'',password:''};
  
  ngOnInit(){
    this.router.navigate([''],{
      queryParams:{'view':null},
      queryParamsHandling:'merge'
    });
  }

  tryUserLogin(){
    this.customerSvc.signIn(this.credentials).subscribe({
      next:()=>this.customerSvc.tryLoadAccounts().subscribe({
        next:()=>this.userLoggedIn.emit()})
    })
    var date = new Date()
    var datetime = ""+date.toLocaleString('default', { month: 'long' })+' '+
                date.getDate()+", "+
                date.getFullYear()+" at "+
                date.getHours()+':'+
                date.getMinutes()+':'+
                date.getSeconds();
    sessionStorage.setItem('lastSignIn',datetime);
  }

  getVersion(){return this.version}

  getCookie(cName:string) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }
  
}
