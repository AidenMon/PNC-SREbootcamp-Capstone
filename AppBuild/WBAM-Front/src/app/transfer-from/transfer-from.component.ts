import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Account } from '../models/account.model';
import { Location } from '@angular/common';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'wmf-transfer-from',
  templateUrl: './transfer-from.component.html',
  styleUrls: ['./transfer-from.component.scss']
})
export class TransferFromComponent {
  accNumber:string='';
  transferFrom:Account | undefined;
  accounts:Account[]=[];
  displaySuccess:boolean=false;
  //Form Vars
  transferForm!:FormGroup;
  transferTo!:Account;
  today:string=(new Date()).toISOString().substring(0,10)
  transferAmountCurrency:number=0;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private customerSvc:CustomerService,
    private _location: Location,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    //load account from query Param
    this.accNumber=this.route.snapshot.queryParams['view']
    
    this.accounts=this.customerSvc.tryReturnAccounts();
    
    this.accounts.forEach((loadAccount)=>{
      if(loadAccount.accountNumber==this.accNumber)
        this.transferFrom=loadAccount;
    })

    //Form Init
    this.transferForm=new FormGroup({
      'transferFrom': new FormControl(this.accNumber),
      'transferAmount': new FormControl(0),
      'transferDate': new FormControl((new Date()).toISOString().substring(0,10)),
      'transferFreq': new FormControl('One Time Only'),
      'transferTo': new FormControl()
    });
  }
  routeBack(){
    this._location.back();
  }
  async onSubmit(){
    //post transaction then update accounts
    this.customerSvc.tryTransfer(this.transferForm).subscribe({
      next:()=>this.customerSvc.tryLoadAccounts().subscribe({
        next:async ()=>{
          this.displaySuccess=true;
          await new Promise(f => setTimeout(f, 1000));
          this.router.navigate(['/transfer']);
        }
      })
    })
  }
}
