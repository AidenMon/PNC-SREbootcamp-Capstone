import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';

const routes: Routes = [
  {path:'', component:AccountsOverviewComponent, title:'Accounts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
