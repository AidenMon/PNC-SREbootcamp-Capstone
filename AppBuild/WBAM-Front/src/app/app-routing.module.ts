import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';
import { TransferOverviewComponent } from './transfer-overview/transfer-overview.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ProfileComponent } from './profile/profile.component';
import { TransferFromComponent } from './transfer-from/transfer-from.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

const routes: Routes = [
  {path:'', component:AccountsOverviewComponent},
  {path:'transfer', component:TransferOverviewComponent, title:'Transfer'},
  {path:'transferdetails', component:TransferFromComponent, title:'Transfer'},
  {path:'details',component:AccountDetailsComponent, title:'Unset'},
  {path:'profile',component:ProfileComponent,title:'Profile and Settings'},
  {path:'error',component:ErrorpageComponent,title:'Whoops!'},
  {path:'editprofile',component:EditprofileComponent,title:"Personal Information"},
  {path:'**', redirectTo:'error', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
