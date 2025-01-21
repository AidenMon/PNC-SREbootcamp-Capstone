import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../models/customer.model';
import { AuthToken } from '../models/authtoken.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'wmf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private customerSvc:CustomerService){}
  @Output() userLoggedIn = new EventEmitter();
  //private user:Customer;
  credentials: AuthToken={userId:'',password:''};
  isLogIn:boolean=false;

  tryUserLogin(){
    this.customerSvc.signIn(this.credentials).subscribe({
      next:()=>this.userLoggedIn.emit()
    });
  }
  
}
