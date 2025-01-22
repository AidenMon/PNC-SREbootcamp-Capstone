import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../models/customer.model';
import { AuthToken } from '../models/authtoken.model';
import { CustomerService } from '../customer.service';
import { AccountService } from '../zzOLD_BROKEN_FILES/account.service';

@Component({
  selector: 'wmf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private tmpCustomer:Customer | null | undefined
  constructor(
    private customerSvc:CustomerService){}

  @Output() userLoggedIn = new EventEmitter();
  credentials: AuthToken={userId:'',password:''};

  tryUserLogin(){
    this.customerSvc.signIn(this.credentials).subscribe({
      next:()=>this.userLoggedIn.emit()
    });

  }
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
