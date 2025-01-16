import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    NavigatorComponent,
    AccountsOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
