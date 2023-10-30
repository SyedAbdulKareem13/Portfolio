import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test6-page',
  templateUrl: './test6-page.component.html',
  styleUrls: ['./test6-page.component.scss']
})
export class Test6PageComponent implements OnInit {


  employeeDetail = [
    {
      employeeID: 901212,
      employeeName: 'Subash Chandra Bose',
      employeeEmail: 'subashchandru.19@gmail.com',
      employeeResignationAppliedDate: '02-Jul-20',
      employeeLastWorkingDate: '02-Sept-20',
      daysLeft: '90 Days Left',
    },
  ];

  detailsOfItems = [
    {
      id : 1,
      item : 'ID Card',
      type : 'checkbox',
      value : 'option',
      class : 'form-check-input',
      isItrated : true,
    },
    {
      id : 2,
      item : 'Medical Card',
      type : 'checkbox',
      value : 'option',
      class : 'form-check-input',
      isItrated : true,
    },
    {
      id : 3,
      item : 'NSR Number',
      placeholder : "Enter NSR Number",
      value : '',
      class : 'form-control',
      isItrated : false,
    }
  ]

  options = [
    {
      id: 1,
      option: 'Yes',
    },
    {
      id: 2,
      option: 'No'
    },
  ];
  constructor() { }
  ngOnInit(): void {
  }

  showButtons: boolean[] = [false, false, false, false, false];

  // onRowHover() {
  //   this.showButtons = true;
  // }

  // onRowLeave() {
  //   this.showButtons = false;
  // }
}
