import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WBAM-Front';
  sidebarVisible:boolean = false;
  loggedIn:boolean = false;
  
  toggleSidebar(){
    this.sidebarVisible = !this.sidebarVisible;
  }
}
