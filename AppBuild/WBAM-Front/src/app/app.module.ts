import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';
import { TransferOverviewComponent } from './transfer-overview/transfer-overview.component';
import { TransferFromComponent } from './transfer-from/transfer-from.component';
import { RecentTransfersComponent } from './recent-transfers/recent-transfers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountViewComponent } from './account-view/account-view.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionComponent } from './section/section.component';
import { SectionItemComponent } from './section-item/section-item.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    NavigatorComponent,
    AccountsOverviewComponent,
    TransferOverviewComponent,
    TransferFromComponent,
    RecentTransfersComponent,
    LoginComponent,
    AccountViewComponent,
    TransactionsComponent,
    ProfileComponent,
    SectionComponent,
    SectionItemComponent,
    ErrorpageComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
