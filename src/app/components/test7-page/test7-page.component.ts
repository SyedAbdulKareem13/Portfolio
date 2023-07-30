import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test7-page',
  templateUrl: './test7-page.component.html',
  styleUrls: ['./test7-page.component.scss']
})
export class Test7PageComponent implements OnInit {
  // handstatement = [
  //   {
  //     id: 1,
  //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
  //     feedback: 'Yes',
  //   },
  //   {
  //     id: 2,
  //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
  //     feedback: 'Yes',
  //   },
  //   {
  //     id: 3,
  //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
  //     feedback: 'Yes',
  //   },
  //   {
  //     id: 4,
  //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
  //     feedback: 'No',
  //   },
  //   {
  //     id: 5,
  //     step: 'Get A Detailed Walkthrough On the Current States Of Various      Responsibilities Handled By The Person Who is Handled By The Person Who is Handling Over',
  //     feedback: 'Yes',
  //   },
  // ];

  // options = [
  //   {
  //     id: 1,
  //     option: 'Yes',
  //   },
  //   {
  //     id: 2,
  //     option: 'No'
  //   },
  //   {
  //     id: 3,
  //     option: 'N / A'
  //   }
  // ];
  constructor() { }

  ngOnInit(): void {
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      console.log(this.todo, 'Todo' )
      console.log(this.done, 'done' )
    }
  }

}
