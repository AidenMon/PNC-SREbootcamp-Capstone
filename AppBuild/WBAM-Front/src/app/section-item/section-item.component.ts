import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SectionItems } from 'src/app/models/section-items.model';

@Component({
  selector: 'wmf-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements AfterViewInit{
  @Input() sectionItem!:SectionItems;
  @Input() childNum!:number;
  @Input() parentNum!:number;
  @Input() sectionItemSmall!:boolean;
  @ViewChild('secItemArrowOption') secItemArrowOption!:ElementRef;
  secItemTitleID="";
  secItemDescID="";
  secItemArrowOptionID="";
  hasArrow=true;
  iconSrc='';
  iconAlt='';
  mainlink:any='';
  queryParams:string[]|undefined=[];

  constructor(private router: Router,){}

  ngOnInit(){
    this.secItemTitleID="secItemTitle"+this.childNum+"_"+this.parentNum+"";
    this.secItemDescID="secItemDesc"+this.childNum+"_"+this.parentNum+"";
    this.secItemArrowOptionID="secItemArrowOption"+this.childNum+"_"+this.parentNum+"";
    
    this.hasArrow=this.sectionItem.secItemArrow;

    if(this.sectionItem.secItemLink.split('?').length != 0){
      var split = this.sectionItem.secItemLink.split('?');
      this.mainlink=split.at(0);
      var tmp = split.at(1)?.toString();
      this.queryParams=tmp?.split('=');
    }
    


    if(!(this.sectionItem.secItemIcon=="")){
      this.iconAlt=this.sectionItem.secItemIcon.replace('-',' ');
      this.iconSrc="./assets/"+this.sectionItem.secItemIcon+".png";
    }
  }

  ngAfterViewInit(){
    // if(this.hasArrow && this.secItemArrowOption.nativeElement){
    //   this.secItemArrowOption.nativeElement.textContent = this.sectionItem.secItemArrowOption;
    // }
    //console.log(document.getElementById(this.secItemTitleID));
    document.getElementById(this.secItemTitleID)!.textContent = this.sectionItem.secItemTitle;
    document.getElementById(this.secItemDescID)!.textContent = this.sectionItem.secItemDesc;
    if(!(this.sectionItem.secItemArrowOption=="")){
      document.getElementById(this.secItemArrowOptionID)!.textContent = this.sectionItem.secItemArrowOption;
    }
  }

  doRoute(){
    if(this.sectionItem.secItemLink=="null"){}
    else{
      var tmp2 = this.queryParams?.at(1)
      var params = {'function':tmp2}
      this.router.navigate([this.mainlink],{
        queryParams:params,
      });
    }
  }
}
