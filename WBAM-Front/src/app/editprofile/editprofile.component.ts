import { Component } from '@angular/core';
import { Section } from '../models/section.model';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../customer.service';
import { Router, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'wmf-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent {
  sections:Section[];
  customer!:Customer|null;
  displayEdit:boolean=false;
  displaySuccess:boolean=false;
  updatedPhone:string="";
  constructor(
      private customerSvc:CustomerService,
      private router: Router,
      private _location: Location,){
    customerSvc.getCustomer().subscribe(response=>this.customer=response)
    this.router.events.subscribe((event) => {
      
      if(event instanceof RoutesRecognized){
        
        var funct = event.urlAfterRedirects.substring(
          event.urlAfterRedirects.indexOf('=')+1
        );
        if(funct=="addNumber"){
          this.displayEdit=!this.displayEdit;
        }
      }
    });

    this.sections=[
      {
        sectionTitle:'',
        sectionItems:[
          {
            secItemIcon:'',
            secItemTitle:'Verified Mobile Numbers',
            secItemDesc:'Eligible services: ZeeBell, text alerts, among others',
            secItemArrow:false,
            secItemArrowOption:'',
            secItemLink:'null'
          },
          {
            secItemIcon:'',
            secItemTitle:'',
            secItemDesc:''+this.customer?.phone,
            secItemArrow:false,
            secItemArrowOption:'',
            secItemLink:'null'
          },
          {
            secItemIcon:'',
            secItemTitle:'',
            secItemDesc:'UPDATE MOBILE NUMBER',
            secItemArrow:false,
            secItemArrowOption:'',
            secItemLink:'editprofile?function=addNumber'
          },
        ]
      },
      // {
      //   sectionTitle:'',
      //   sectionItems:[
      //     {
      //       secItemIcon:'',
      //       secItemTitle:'Addresses',
      //       secItemDesc:'',
      //       secItemArrow:false,
      //       secItemArrowOption:'',
      //       secItemLink:'null'
      //     },
      //     {
      //       secItemIcon:'',
      //       secItemTitle:''+this.customer?.addressId,
      //       secItemDesc:'',
      //       secItemArrow:false,
      //       secItemArrowOption:'',
      //       secItemLink:'null'
      //     },
      //   ]
      // },
      {
        sectionTitle:'',
        sectionItems:[
          {
            secItemIcon:'',
            secItemTitle:'Email Addresses',
            secItemDesc:'',
            secItemArrow:false,
            secItemArrowOption:'',
            secItemLink:'null'
          },
          {
            secItemIcon:'',
            secItemTitle:'',
            secItemDesc:''+this.customer?.email,
            secItemArrow:false,
            secItemArrowOption:'',
            secItemLink:'null'
          },
        ]
      },
    ]
  }

  closeEdit(){
    //clear params
    this.router.navigate(['/editprofile'],{
      queryParams:{'function':null},
      queryParamsHandling:'merge'
    });
    if(this.displayEdit)
      this.displayEdit=!this.displayEdit;
  }
  closeSuccess(){
    //clear params
    this.router.navigate(['/editprofile'],{
      queryParams:{'function':null},
      queryParamsHandling:'merge'
    });
    if(this.displaySuccess)
      this.displaySuccess=!this.displaySuccess;
  }

  submit(){
    this.customerSvc.tryUpdatePhone(this.updatedPhone, this.customer).subscribe({
      next:async ()=>{
        this.displaySuccess=true;
        this.closeEdit();
      }
    })
  }
  routeBack(){
    this.router.navigate(['/profile']);
  }
}
