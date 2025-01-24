import { Component, Input } from '@angular/core';
import { Account } from '../models/account.model';

@Component({
  selector: 'wmf-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss']
})
export class AccountViewComponent {
  @Input() account!: Account;
  
}
