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
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    NavigatorComponent,
    AccountsOverviewComponent,
    TransferOverviewComponent,
    TransferFromComponent,
    RecentTransfersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
