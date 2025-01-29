import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Section } from '../models/section';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'wmf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  sections:Section[]
  customer?:Customer|null;
  lastOn=sessionStorage.getItem('lastSignIn');
  constructor(
    private customerSvc:CustomerService,)
    {
      customerSvc.getCustomer().subscribe(response=>this.customer=response)
      this.sections=[
        {
          sectionTitle:'',
          sectionItems:[
            {
              secItemIcon:'battery-ico',
              secItemTitle:'Personal Information',
              secItemDesc:'View and manage your addresses, emails, and phone numbers.',
              secItemArrow:true,
              secItemArrowOption:''
            },
            {
              secItemIcon:'battery-ico',
              secItemTitle:'PNC Contol Hub',
              secItemDesc:'Manage how, when, and where your PNC accounts are accessed.',
              secItemArrow:true,
              secItemArrowOption:''
            },
            {
              secItemIcon:'battery-ico',
              secItemTitle:'Overdraft Solutions',
              secItemDesc:'Set up alerts and control overdraft settings for your accounts.',
              secItemArrow:true,
              secItemArrowOption:''
            },
            {
              secItemIcon:'battery-ico',
              secItemTitle:'Low Cash Mode',
              secItemDesc:'Set your threshold, manage alerts, and review your Payment Control history.',
              secItemArrow:true,
              secItemArrowOption:''
              
            },
          ]
        },
        {
          sectionTitle:'App & Device Settings',
          sectionItems:[
            {
              secItemIcon:'',
              secItemTitle:'Biometric Authentication',
              secItemDesc:'Sign-in to the app with your biometrics',
              secItemArrow:true,
              secItemArrowOption:'ShowTxt'
            },
            {
              secItemIcon:'',
              secItemTitle:'App Language',
              secItemDesc:'Change your default app language',
              secItemArrow:true,
              secItemArrowOption:'Off'
            },
            
          ]
        },
        {
          sectionTitle:'Documents',
          sectionItems:[
            {
              secItemIcon:'',
              secItemTitle:'Online Statemetns',
              secItemDesc:'View previous online statemetns',
              secItemArrow:true,
              secItemArrowOption:''
            },
            {
              secItemIcon:'',
              secItemTitle:'Online Documents',
              secItemDesc:'View notices and letters',
              secItemArrow:true,
              secItemArrowOption:''
            },
            {
              secItemIcon:'',
              secItemTitle:'Other Documents',
              secItemDesc:'View tax documents and more',
              secItemArrow:true,
              secItemArrowOption:''
            },
            
          ]
        },
        {
          sectionTitle:'Account Preferences',
          sectionItems:[
            {
              secItemIcon:'',
              secItemTitle:'Alerts & Notifications',
              secItemDesc:'Manage how you recieve push notifications, text, and email alerts.',
              secItemArrow:true,
              secItemArrowOption:''
            },
            {
              secItemIcon:'',
              secItemTitle:'Display or Hide Accounts',
              secItemDesc:'Control which accounts to display or hide',
              secItemArrow:true,
              secItemArrowOption:''
            },
            {
              secItemIcon:'',
              secItemTitle:'Nicknames',
              secItemDesc:'Create, edit, or remove account nicknames',
              secItemArrow:true,
              secItemArrowOption:''
            },
            
          ]
        },
      ]
  }
}
