import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4-page',
  templateUrl: './test4-page.component.html',
  styleUrls: ['./test4-page.component.scss']
})
export class Test4PageComponent implements OnInit {
  surveyForm = [
    {
      id: 1,
      question: 'What was the reason for leaving?',
    },
    {
      id: 2,
      question: 'Did You Feel Your Achievment Were Recognized Throughout Your Employement',
    },
    {
      id: 3,
      question: 'What Suggestions Do You Have For The Company? How Could We Improve?',
    },
    {
      id: 4,
      question: 'Would You Recommend This Company To A Friend?',
    },
    {
      id: 5,
      question: 'Did You Share Any Of The Concerns We Discoussed Today With The Company Before Deciding To Leave?',
    },
  ];

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

  moreOptions = [
    {
      id: 1,
      option: 'Higher pay'
    },
    {
      id: 2,
      option: 'Conflict with other Employees'
    },
    {
      id: 3,
      option: 'Better benifits'
    },
    {
      id: 4,
      option: 'Better benifits'
    },
    {
      id: 5,
      option: 'Career change'
    },
    {
      id: 6,
      option: 'No work from home'
    }
  ];

  notes = [
    "Is there anything that would have changed your mind about leaving?"
  ]
  ratingOptions = [
    { value: '1', checked: false },
    { value: '2', checked: false },
    { value: '3', checked: false },
    { value: '4', checked: false },
    { value: '5', checked: false },
  ]

  ratingBasedOn = [
    {
      id: 1,
      ratingOn: 'Advancement opportunity',
    },
    {
      id: 2,
      ratingOn: 'Benifits',
    },
    {
      id: 3,
      ratingOn: 'Pay',
    },
    {
      id: 4,
      ratingOn: 'Management',
    },
    {
      id: 5,
      ratingOn: 'Work Environment',
    },
    {
      id: 6,
      ratingOn: 'Work Schedule',
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
