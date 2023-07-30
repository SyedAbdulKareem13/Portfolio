import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-test1-page',
  templateUrl: './test1-page.component.html',
  styleUrls: ['./test1-page.component.scss']
})
export class Test1PageComponent implements OnInit {
  resignationProcess = [
    {
      id: 1,
      step: 'Sukumaran',
      des: 'Pending',
      profileicon: 'person',
    },
    {
      id: 2,
      step: 'Hari Shankar',
      des: 'Pending',
      profileicon: false,
    },
  ];
  empdata = [
    {
      empid: 901212,
      name: 'Subash Chandra Bose',
      emptype: 'Full-Time',
      date: '01-09-2022',
    },
  ];
  reasons = [
    {
      id: 1,
      reason: 'Career Change',
    },
    {
      id: 2,
      reason: 'Not Satisfying Pay',
    },
    {
      id: 3,
      reason: 'No Work Life Balance',
    },
  ];
  Notes = [
    {
      noteFromEmp: 'Personal Reason',
    },
  ];

  noticePeriod = [{ daysLeft: '90 Days', lastWorkingDay: '16th Sept' }];

  modifiedNoticePeriod = [
    { modifieddaysleft: '45 Days', reasonForChanging: 'Earned Leaves' },
  ];

  events: string[] = [];
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  isShowDiv = true;
  divStyle = 'notice-period';

  modifieNoticePeriod() {
    if (this.divStyle == 'notice-period-change') {
      this.divStyle = 'notice-period';
    } else {
      this.divStyle = 'notice-period-change';
      this.isShowDiv = !this.isShowDiv;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

