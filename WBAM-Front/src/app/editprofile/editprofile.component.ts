import { Component } from '@angular/core';
import { Section } from '../models/section.model';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'wmf-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent {
  sections:Section[];
  customer?:Customer|null;
  constructor(private customerSvc:CustomerService,){
    customerSvc.getCustomer().subscribe(response=>this.customer=response)
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
            secItemDesc:'+ ADD MOBILE NUMBER',
            secItemArrow:false,
            secItemArrowOption:'',
            secItemLink:'editprofile?function=addNumber'
          },
        ]
      },
      {
        sectionTitle:'',
        sectionItems:[
          {
            secItemIcon:'',
            secItemTitle:'Addresses',
            secItemDesc:'',
            secItemArrow:false,
            secItemArrowOption:'',
            secItemLink:'null'
          },
          {
            secItemIcon:'',
            secItemTitle:''+this.customer?.addressId,
            secItemDesc:'',
            secItemArrow:false,
            secItemArrowOption:'',
            secItemLink:'null'
          },
        ]
      },
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
            secItemTitle:''+this.customer?.email,
            secItemDesc:'',
            secItemArrow:false,
            secItemArrowOption:'',
            secItemLink:'null'
          },
        ]
      },
    ]
  }
}
