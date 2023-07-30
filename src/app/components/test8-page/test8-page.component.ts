import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test8-page',
  templateUrl: './test8-page.component.html',
  styleUrls: ['./test8-page.component.scss']
})
export class Test8PageComponent implements OnInit {

    reasonResignationPrimary =['Career Change'];

    reasonResignationSecondary =['Not Satisfying Pay'];

    reasonResignationTritary =['No Work-Life Balance'];

    dateOfSubmission = [ ' 16-Jun-2022'];

    notesFromEmployee = [ 'Hi, I have some family issue so i have to be with my family to take care thanks for giving this great opportunity ']

  constructor() { }

  ngOnInit(): void {
  }

}
