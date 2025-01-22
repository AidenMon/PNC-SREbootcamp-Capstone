import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './models/customer.model';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from './zzOLD_BROKEN_FILES/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WBAM-Front';
  displayTitle:any;
  sidebarVisible:boolean = false;
  loggedIn:boolean=false;
  customer: Customer | null
  num:number=1;
  constructor(
    private customerSvc: CustomerService,
    private readonly route: ActivatedRoute,
    private accountSvc:AccountService
    ){
      this.customer=null;}

  ngOnInit(){
    this.customerSvc.getCustomer().subscribe( response => {
      this.customer=response;
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
  getLS(){
    return sessionStorage.getItem('customerId');
  }

  logUsrIn(){
    this.accountSvc.loadAccountData();
    this.loggedIn=true;
  }
  logUsrOut(){
    this.loggedIn=false;
    this.toggleSidebar();
  }

  toggleSidebar(){
    this.sidebarVisible = !this.sidebarVisible;
  }
}
