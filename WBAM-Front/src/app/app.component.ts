import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WBAM-Front';
  sidebarVisible:boolean = false;
  loggedIn:boolean=false;
  constructor(private customerSvc: CustomerService){}

  ngOnInit(){
    this.loggedIn=false;
  }

  logUsrIn(){
    this.loggedIn=true;
  }

  toggleSidebar(){
    this.sidebarVisible = !this.sidebarVisible;
  }
}
