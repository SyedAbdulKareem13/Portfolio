import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  @Input() items: any[] = [];
  currentIndex = 0;

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev(): void {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.items.length - 1;
  }
  

  constructor(config: NgbCarouselConfig) { 
    config.interval = 0; // No auto-rotation, you can adjust this as needed
    config.wrap = false; 
  }

  ngOnInit(): void {
  }

  fieldData = [
    {
      id: 1,
      fieldName: 'Account Persona',
      fieldDescription: 'This is the field where the user has to enter the suitable account persona inforamtion'
    },
    {
      id: 2,
      fieldName: 'Account Type',
      fieldDescription: 'This is the field where the user has to enter the suitable account persona inforamtion'
    },
    {
      id: 3,
      fieldName: 'Account Data',
      fieldDescription: 'This is the field where the user has to enter the suitable account persona inforamtion'
    },
    {
      id: 4,
      fieldName: 'Account Holder',
      fieldDescription: 'This is the field where the user has to enter the suitable account persona inforamtion'
    }
  ]

}
