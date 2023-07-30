import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2-page',
  templateUrl: './test2-page.component.html',
  styleUrls: ['./test2-page.component.scss']
})
export class Test2PageComponent implements OnInit {
  empdata = [
    {
      empid: 901212,
      name: 'Subash Chandra Bose',
      email: 'subashchandru.19@gmail.com',
      submiton: '02-Jul-20',
      lastworkdate: '02-Sept-20',
      daysLeft: '90 Days Left',
    },
  ];

  process = [
    {
      id: 1,
      resigationStep: 'Sukumaran Acceptance',
      resignationDescription:
        'Your manager should accept your resignation, we guess it will be a heartbreak!',
      completedDate: '24-03-2023',
      resignationStatus: 'Approval Pending',
      isbuttonActive: false,
    },
    {
      id: 2,
      resigationStep: 'IP Out Sign',
      resignationDescription: 'Hand-over/ take-over from Approval',
      completedDate: '-',
      resignationStatus: 'Pending',
      isbuttonActive: true,
    },
    {
      id: 3,
      resigationStep: 'Handover Take Over',
      resignationDescription: 'Handover/ Take Over Approval',
      completedDate: '-',
      resignationStatus: 'Pending',
      isbuttonActive: true,
    },
    {
      id: 4,
      resigationStep: 'System Administration',
      resignationDescription:
        'To collect IT accessories and remove login and email etc..',
      completedDate: '-',
      resignationStatus: 'Pending',
      isbuttonActive: true,
    },
    {
      id: 5,
      resigationStep: 'Administration',
      resignationDescription: 'To collect ID Card, Keys, SIM, books',
      completedDate: '-',
      resignationStatus: 'Pending',
      isbuttonActive: true,
    },
    {
      id: 6,
      resigationStep: 'Finance',
      resignationDescription: 'Loan Balance Amount',
      completedDate: '-',
      resignationStatus: 'Pending',
      isbuttonActive: true,
    },
    {
      id: 7,
      resigationStep: 'HR Docs',
      resignationDescription: 'To collect medical insurance and check files',
      completedDate: '-',
      resignationStatus: 'Pending',
      isbuttonActive: true,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
