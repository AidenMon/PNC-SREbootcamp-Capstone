import { Component, Input } from '@angular/core';
import { Account } from '../models/account.model';

@Component({
  selector: 'wmf-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  @Input() account!: Account;
  
}
