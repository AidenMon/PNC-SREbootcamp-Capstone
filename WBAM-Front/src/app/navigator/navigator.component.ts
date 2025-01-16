import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'wmf-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
  }

  sidebarVisible: boolean = false;
  title: any="";
  
  ngOnInit(){
    this.title="fix this";
  }

  toggleSidebar(){
    this.sidebarVisible = !this.sidebarVisible;
  }
}
