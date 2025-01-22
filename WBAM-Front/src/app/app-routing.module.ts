import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';
import { TransferOverviewComponent } from './transfer-overview/transfer-overview.component';
import { Customer } from './models/customer.model';

const routes: Routes = [
  {path:'', component:AccountsOverviewComponent, title:'Accounts'},
  {path:'transfer', component:TransferOverviewComponent, title:'Transfer'},
  {path:'**', redirectTo:'', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
