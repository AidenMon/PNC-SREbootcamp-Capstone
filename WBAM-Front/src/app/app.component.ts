import { AfterViewInit, Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './account.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'WBAM-Front';
  displayTitle:any;
  sidebarVisible:boolean = false;
  loggedIn:boolean=false;
  customer: Customer | null
  num:number=1;
  constructor(
    private customerSvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private accountSvc:AccountService,
    private titleService:Title,
    ){
      this.customer=null;
      this.titleService.setTitle('PNC Login');}

  ngOnInit(){
    this.customerSvc.getCustomer().subscribe( response => {
      this.customer=response;
    });
    this.router.events.subscribe(() => {
      this.displayTitle = this.titleService.getTitle(); 
    });
  }
  ngAfterViewInit(){
    this.displayTitle=this.titleService.getTitle();
  }
  ngOnChange(){
    
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
    this.router.navigate([''],{
      queryParams:{'view':null},
      queryParamsHandling:'merge'
    });
    this.customerSvc.signOut();
    this.loggedIn=false;
    this.toggleSidebar();
  }

  toggleSidebar(){
    this.sidebarVisible = !this.sidebarVisible;
  }
}
