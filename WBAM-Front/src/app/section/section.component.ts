import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Section } from '../models/section.model';
import { SectionItems } from '../models/section-items.model';

@Component({
  selector: 'wmf-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements AfterViewInit{
  @Input() section!:Section;
  @Input() sectionIndex!:number;
  @Input() sectionItemSmall!:boolean;
  @ViewChild('sectionTitle') sectionTitle!:ElementRef;
  hasTitle=true;
  
  ngAfterViewInit(){
    if(this.hasTitle && this.sectionTitle.nativeElement){
      this.sectionTitle.nativeElement.textContent = this.section.sectionTitle;
    }
    
  }

}
