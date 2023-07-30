import { trigger, transition, style, animate } from '@angular/animations';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { formatDate } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-test5-page',
  templateUrl: './test5-page.component.html',
  styleUrls: ['./test5-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
  viewProviders: [MatExpansionPanel],
  encapsulation: ViewEncapsulation.None,
})



export class Test5PageComponent implements OnInit {

  selectedIteration: SelectedIteration[] = [
    {
      value: 'past-1',
      viewValue: 'Iteration 1',
      statusStateColor: { 'background-color': '#A8ACB2' },
      statusStateIteration: 'Past',
    },
    {
      value: 'past-2',
      viewValue: 'Iteration 2',
      statusStateColor: { 'background-color': '#A8ACB2' },
      statusStateIteration: 'Past',
    },
    {
      value: 'present',
      viewValue: 'Iteration 3',
      statusStateColor: { 'background-color': '#1890FF' },
      statusStateIteration: 'Present',
    },
    {
      value: 'future',
      viewValue: 'Iteration 4',
      statusStateColor: { 'background-color': '#FFBD3D' },
      statusStateIteration: 'Future',
    },
  ];

  checked: boolean;
  currentDraggingTask: any;
  isEditing: boolean;
  taskIdCounter = 1000;
  isInputFocused: boolean = false;
  selectedItem: string = 'present';



  myColumns = [

    {
      id: 1,
      columnHeader: "To Do",
      count: 10,
      barColor: '#FFBD3D',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: 'Present',
          statusColor: '#FA8C16',
          isEditing: false,
        },
        {
          id: 2,
          taskHeader: 'Web app development',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
          isEditing: false,
        },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#FA8C16',
          isEditing: false,
        },
        {
          id: 4,
          taskHeader: 'Mobile application',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
          isEditing: false,
        },
      ]
    },
    {
      id: 2,
      columnHeader: "In Progress",
      count: 10,
      barColor: '#1890FF',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: '15 July 2023',
          statusColor: '#FA8C16',
        },
        {
          id: 2,
          taskHeader: 'Web app development',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 4,
          taskHeader: 'Mobile application',
          submittedDate: '15 July 2023',
          statusColor: '#FA8C16',
        },
      ]
    },
    {
      id: 3,
      columnHeader: "Completed",
      count: 10,
      barColor: '#52C41A',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: '15 July 2023',
          statusColor: '#FF3A46',
        },
        {
          id: 2,
          taskHeader: 'Web app development',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#FF3A46',
        },
        {
          id: 4,
          taskHeader: 'Mobile application',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        // {
        //   id: 5,
        //   taskHeader: 'cloud application',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        // },
        // {
        //   id: 6,
        //   taskHeader: 'Azure application',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        // },
      ]
    },
  ];

  pastOneData = [

    {
      id: 1,
      columnHeader: "To Do",
      count: 10,
      barColor: '#FFBD3D',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: 'Past',
          statusColor: '#FA8C16',
          isEditing: false,
        },
        {
          id: 2,
          taskHeader: 'Web app development',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
          isEditing: false,
        },
        // {
        //   id: 3,
        //   taskHeader: 'SEO',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#FA8C16',
        //   isEditing: false,
        // },
        // {
        //   id: 4,
        //   taskHeader: 'Mobile application',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        //   isEditing: false,
        // },
      ]
    },
    {
      id: 2,
      columnHeader: "In Progress",
      count: 10,
      barColor: '#1890FF',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: '15 July 2023',
          statusColor: '#FA8C16',
        },
        {
          id: 2,
          taskHeader: 'Web app development',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        // {
        //   id: 4,
        //   taskHeader: 'Mobile application',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#FA8C16',
        // },
      ]
    },
    {
      id: 3,
      columnHeader: "Completed",
      count: 10,
      barColor: '#52C41A',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: '15 July 2023',
          statusColor: '#FF3A46',
        },
        {
          id: 2,
          taskHeader: 'Web app development',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#FF3A46',
        },
        {
          id: 4,
          taskHeader: 'Mobile application',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 5,
          taskHeader: 'cloud application',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 6,
          taskHeader: 'Azure application',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
      ]
    },
  ];

  pastTwoData = [

    {
      id: 1,
      columnHeader: "To Do",
      count: 10,
      barColor: '#FFBD3D',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: 'Past 2',
          statusColor: '#FA8C16',
          isEditing: false,
        },
        {
          id: 2,
          taskHeader: 'Web app development',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
          isEditing: false,
        },
        // {
        //   id: 3,
        //   taskHeader: 'SEO',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#FA8C16',
        //   isEditing: false,
        // },
        {
          id: 4,
          taskHeader: 'Mobile application',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
          isEditing: false,
        },
      ]
    },
    {
      id: 2,
      columnHeader: "In Progress",
      count: 10,
      barColor: '#1890FF',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: '15 July 2023',
          statusColor: '#FA8C16',
        },
        // {
        //   id: 2,
        //   taskHeader: 'Web app development',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        // },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 4,
          taskHeader: 'Mobile application',
          submittedDate: '15 July 2023',
          statusColor: '#FA8C16',
        },
      ]
    },
    {
      id: 3,
      columnHeader: "Completed",
      count: 10,
      barColor: '#52C41A',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: '15 July 2023',
          statusColor: '#FF3A46',
        },
        {
          id: 2,
          taskHeader: 'Web app development',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#FF3A46',
        },
        // {
        //   id: 4,
        //   taskHeader: 'Mobile application',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        // },
        // {
        //   id: 5,
        //   taskHeader: 'cloud application',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        // },
        // {
        //   id: 6,
        //   taskHeader: 'Azure application',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        // },
      ]
    },
  ];

  futureData = [

    {
      id: 1,
      columnHeader: "To Do",
      count: 10,
      barColor: '#FFBD3D',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: 'Future',
          statusColor: '#FA8C16',
          isEditing: false,
        },
        // {
        //   id: 2,
        //   taskHeader: 'Web app development',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        //   isEditing: false,
        // },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#FA8C16',
          isEditing: false,
        },
        {
          id: 4,
          taskHeader: 'Mobile application',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
          isEditing: false,
        },
      ]
    },
    {
      id: 2,
      columnHeader: "In Progress",
      count: 10,
      barColor: '#1890FF',
      task: [
        // {
        //   id: 1,
        //   taskHeader: 'Design Dashboard',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#FA8C16',
        // },
        // {
        //   id: 2,
        //   taskHeader: 'Web app development',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        // },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 4,
          taskHeader: 'Mobile application',
          submittedDate: '15 July 2023',
          statusColor: '#FA8C16',
        },
      ]
    },
    {
      id: 3,
      columnHeader: "Completed",
      count: 10,
      barColor: '#52C41A',
      task: [
        {
          id: 1,
          taskHeader: 'Design Dashboard',
          submittedDate: '15 July 2023',
          statusColor: '#FF3A46',
        },
        {
          id: 2,
          taskHeader: 'Web app development',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        {
          id: 3,
          taskHeader: 'SEO',
          submittedDate: '15 July 2023',
          statusColor: '#FF3A46',
        },
        {
          id: 4,
          taskHeader: 'Mobile application',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
        // {
        //   id: 5,
        //   taskHeader: 'cloud application',
        //   submittedDate: '15 July 2023',
        //   statusColor: '#526179',
        // },
        {
          id: 6,
          taskHeader: 'Azure application',
          submittedDate: '15 July 2023',
          statusColor: '#526179',
        },
      ]
    },
  ];

  ngOnInit() {
    this.myColumns.forEach((column) => {
      column.task.forEach((task) => {
        task.isEditing = false;
      });
    });
  }

  // addNewTask(item: any) {
  //   const newTask = {
  //     id: ++this.taskIdCounter,
  //     taskHeader: 'New Task',
  //     submittedDate: 'Unknown',
  //     statusColor: '#000000',
  //     isEditing: true
  //   };

  //   item.task.unshift(newTask);

  //   setTimeout(() => {
  //     const inputElement = document.getElementById(`input-task-${newTask.id}`);
  //     if (inputElement) {
  //       inputElement.focus();
  //     }
  //   }, 0);
  // }

  get currentSelected() {
    switch (this.selectedItem) {
      case 'past-1':
        return this.pastOneData;
      case 'past-2':
        return this.pastTwoData;
      case 'future':
        return this.futureData;
      default:
        return this.myColumns;
    }
  }

  onSelectionChange() {
  }

  findColumnByHeader(header: string): any {
    return this.myColumns.find((column) => column.columnHeader === header);
  }

  formatDateToDDMMM(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  }


  addNewTask(item: any, columnHeader: string) {
    const newTask = {
      id: ++this.taskIdCounter,
      taskHeader: 'New Task',
      // submittedDate: new Date().toISOString(),
      submittedDate: this.formatDateToDDMMM(new Date()),
      statusColor: '#13b80a',
      isEditing: true,
      isNew: true,
    };

    item.task.unshift(newTask);
    console.log('Updated myColumns:', this.myColumns);
    const column = this.findColumnByHeader(columnHeader);
    if (column) {
      column.task.unshift(newTask);
    }

    setTimeout(() => {
      const inputElement = document.getElementById(`input-task-${newTask.id}`);
      if (inputElement) {
        inputElement.focus();
      }
    }, 0);
  }

  // addNewTask(item: any, columnHeader: string) {
  //   const today = new Date();

  //   const newTask = {
  //     id: ++this.taskIdCounter,
  //     taskHeader: 'New Task',
  //     submittedDate: today,
  //     statusColor: '#13b80a',
  //     isEditing: true,
  //     isNew: true,
  //   };
  //   const formatDate = (date: Date) => {
  //     const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
  //     return date.toLocaleDateString('en-US', options);
  //   };
  //   if (item.submittedDate && item.submittedDate.toDateString() === today.toDateString()) {
  //     newTask.submittedDate = 'Today';
  //   } else {
  //     newTask.submittedDate = formatDate(today);
  //   }

  //   item.task.unshift(newTask);
  //   const column = this.findColumnByHeader(columnHeader);
  //   if (column) {
  //     column.task.unshift(newTask);
  //   }

  //   console.log('Updated myColumns:', this.myColumns);
  // }

  // addNewTask(item: any, columnHeader: string) {
  //   const today = new Date(); // Get the current date object

  //   const newTask = {
  //     id: ++this.taskIdCounter,
  //     taskHeader: 'New Task',
  //     submittedDate: '', // Initialize the submittedDate property as an empty string
  //     statusColor: '#FFFFFF',
  //     isEditing: true,
  //     isNew: true,
  //   };

  //   // If the date is today, display "Today", otherwise format it as "DD MMM"
  //   const formattedDate =
  //     today.toDateString() === newTask.submittedDate.toDateString()
  //       ? 'Today'
  //       : formatDate(today);

  //   newTask.submittedDate = formattedDate; // Assign the formatted date to the submittedDate property

  //   // Find the index to add the new task based on the columnHeader
  //   const columnIndex = this.myColumns.findIndex((column) => column.columnHeader === columnHeader);

  //   if (columnIndex > -1) {
  //     this.myColumns[columnIndex].task.unshift(newTask); // Add the new task to the beginning of the task array
  //   }
  // }


  // ...

  // addNewTask(item: any, columnHeader: string) {
  //   const today = new Date(); // Get the current date object

  //   const newTask = {
  //     id: ++this.taskIdCounter,
  //     taskHeader: 'New Task',
  //     submittedDate: '',
  //     statusColor: '#FFFFFF',
  //     isEditing: true,
  //     isNew: true,
  //   };

  //   // If the date is today, display "Today", otherwise format it as "DD MMM"
  //   const formattedDate = today.toDateString() === new Date(item.submittedDate).toDateString()
  //     ? 'Today'
  //     : formatDate(new Date(item.submittedDate), 'dd MMM', 'en-US'); // You can change 'en-US' to the desired locale

  //   newTask.submittedDate = formattedDate; // Assign the formatted date to the submittedDate property

  //   // Find the index to add the new task based on the columnHeader
  //   const columnIndex = this.myColumns.findIndex((column) => column.columnHeader === columnHeader);

  //   if (columnIndex > -1) {
  //     this.myColumns[columnIndex].task.unshift(newTask); // Add the new task to the beginning of the task array
  //   }
  // }

  trackByTaskId(index: number, task: any): number {
    return task.id;
  }

  removeTask(item: any, task: any) {
    const index = item.task.indexOf(task);
    if (index !== -1) {
      item.task.splice(index, 1);
    }
  }

  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    this.isInputFocused = false;
  }

  columnIds = this.myColumns.map((column) => column.id);

  drop(event: CdkDragDrop<any[]>, newColumn: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.item.data.column = newColumn; // Update the task's column property
    }
  }

  onDragStarted(task: any) {
    this.currentDraggingTask = task;
  }

  onDragEnded() {
    this.currentDraggingTask = null;
  }

  onEditBlur(task: any) {
    task.isEditing = false;
    task.isNew = false;
  }
}

interface SelectedIteration {
  value: string;
  viewValue: string;
  statusStateColor: any;
  statusStateIteration: any;
}