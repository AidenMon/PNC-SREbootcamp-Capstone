import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'wmf-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss']
})
export class ErrorpageComponent {
  constructor(
    private _location: Location,)
    {
    
    }
  routeBack(){
    //this.router.navigate(['']);
    this._location.back();
  }
}
