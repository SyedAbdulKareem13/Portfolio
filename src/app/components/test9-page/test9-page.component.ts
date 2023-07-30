import { trigger, state, style, transition, animate } from '@angular/animations';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSelect } from '@angular/material/select';
// import { type } from 'os';
@Component({
  selector: 'app-test9-page',
  templateUrl: './test9-page.component.html',
  styleUrls: ['./test9-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(200)),
    ]),
    trigger('expandedIcon', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(180deg)' })),
      transition('false <=> true', animate('200ms ease-in-out')),
    ]),
    trigger('collapsedSection', [
      state('false', style({ height: '0', overflow: 'hidden' })),
      state('true', style({ height: '*', overflow: 'hidden' })),
      transition('false <=> true', animate('200ms ease-in-out')),
    ]),
    trigger('expandedSection', [
      state('false', style({ height: '0', overflow: 'hidden', opacity: 0 })),
      state('true', style({ height: '*', overflow: 'hidden', opacity: 1 })),
      transition('false <=> true', animate('200ms ease-in-out')),
    ]),
  ],
})
export class Test9PageComponent implements OnInit {

  constructor(private renderer: Renderer2, private changeDetectorRef: ChangeDetectorRef) { }
  @ViewChild('typeSelect', { static: false }) typeSelect: MatSelect;
  selectedTypeValue: number | null = null;
  // ngAfterViewInit(): void {
  //   this.updatePlaceholderText();
  // }

  getSelectedTypeName(): string {
    const selectedOptionValue = this.typeSelect?.value;
    const selectedOption = this.selectedTypes.find(option => option.id === selectedOptionValue);

    return selectedOption ? selectedOption.name : 'Types'; // Default placeholder text
  }

  onOptionClicked() {
    this.typeSelect.placeholder = this.getSelectedTypeName();
  }

  ngOnInit(): void {
  }
  statusIndication = [
    {
      id : 1,
      color: 'lightgrey',
      toolTipValue: 'Not Started'
    },
    {
      id : 2,
      color: '#0052CC',
      toolTipValue: 'In Progress',
      value: 1
    },
    {
      id : 3,
      color: '#00875A',
      toolTipValue: 'Done',
      value: 1
    }
  ]

  selectedTypes = [
    {
      id: 1,
      name: "Epic",
      itsIcon: "stars",
      iconColor: "#e06c00"
    },
    {
      id: 2,
      name: "Feature",
      itsIcon: 'emoji_events',
      iconColor: "#773b93"
    },
    {
      id: 3,
      name: "Story",
      itsIcon: "menu_book",
      iconColor: "#0098c7"
    },
    // {
    //   id: 4,
    //   name: "Task",
    //   itsIcon: "add_task",
    //   iconColor: "#a4880a"
    // },
    // {
    //   id: 5,
    //   name: "Bug",
    //   itsIcon: "pest_control",
    //   iconColor: "#cc293d"
    // }
  ];

  selectedType = [
    // {
    //   id: 1,
    //   name: "Epic",
    //   itsIcon: "stars",
    //   iconColor: "#e06c00"
    // },
    // {
    //   id: 2,
    //   name: "Feature",
    //   itsIcon: 'trophy',
    //   iconColor: "#773b93"
    // },
    {
      id: 3,
      name: "User Story",
      itsIcon: "menu_book",
      iconColor: "#0098c7"
    },
    {
      id: 4,
      name: "Task",
      itsIcon: "add_task",
      iconColor: "#a4880a"
    },
    {
      id: 5,
      name: "Bug",
      itsIcon: "pest_control",
      iconColor: "#cc293d"
    }
  ];

  backlogList = [
    {
      id: 1,
      issueName: 'Integrate the new feature with the existing code base',
      editMode: false,
      toolTipValue: 'Bug',
      issueType: 'pest_control',
      iconColor: "#0098c7"
    },
    {
      id: 2,
      issueName: 'Setup a feedback tool to facilitate the feedback process',
      editMode: false,
      toolTipValue: 'Feature',
      issueType: 'emoji_events',
      iconColor: "#773b93"
    }
  ]

  issueList: Issue[] = [
    {
      id: 1,
      issueName: 'Integrate the new feature with the existing code base',
      editMode: false,
      toolTipValue: 'Epic',
      issueType: 'stars',
      iconColor: "#e06c00"
    },
    {
      id: 2,
      issueName: 'Setup a feedback tool to facilitate the feedback process',
      editMode: false,
      toolTipValue: 'Feature',
      issueType: 'emoji_events',
      iconColor: "#773b93"
    }
  ];

  showInputFieldBoards: boolean = false;
  showInputFieldBacklogs: boolean = false;
  newIssueBoards: string = '';
  newIssueBacklogs: string = '';
  isExpandedBoard: boolean = this.issueList.length > 0;
  isExpandedBacklog: boolean = this.backlogList.length > 0;
  newIssue: string = '';
  nextIssueId: number = 3;
  selectedTypeOO: number = 2;
  selectedMatIconName: string = 'add';
  taskNameToAdd: string = 'Add Upcoming work here';
  expandedHeight: number;


  onTaskDropped(event: CdkDragDrop<Issue[]>, type: 'boards' | 'backlogs') {
    if (!event.container.data || event.container.data.length === 0) {
      return;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (type === 'boards') {
        transferArrayItem(
          this.backlogList,
          this.issueList,
          event.previousIndex,
          event.currentIndex
        );
      } else if (type === 'backlogs') {
        transferArrayItem(
          this.issueList,
          this.backlogList,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }



  toggleIcon(type: string) {
    if (type == 'boards') {
      this.isExpandedBoard = !this.isExpandedBoard;
    } else if (type == 'backlogs') {
      this.isExpandedBacklog = !this.isExpandedBacklog;
    }
  }

  toggleEditMode(item: Issue) {
    item.editMode = !item.editMode;
    // If the item is in edit mode, set the expandedHeight to the current content height
    if (item.editMode) {
      // You can adjust the offset (e.g., 20) to add some padding to the expanded height
      this.expandedHeight = document.getElementById(`item-${item.id}`).clientHeight + 20;
    } else {
      // If the item is not in edit mode, reset the expandedHeight to null
      this.expandedHeight = null;
    }
  }

  addNewIssue(inputField: string) {
    const trimmedIssueName = this.newIssueBoards.trim();
    const issueNameToAdd = trimmedIssueName !== '' ? trimmedIssueName : 'New Task';

    const newIssueObj: Issue = {
      id: this.nextIssueId,
      issueName: issueNameToAdd,
      editMode: false,
      toolTipValue: 'Epic',
      issueType: 'stars',
      iconColor: "#e06c00",
    };
    if (inputField === 'boards') {
      this.issueList.push(newIssueObj);
    } else if (inputField === 'backlogs') {
      this.backlogList.push(newIssueObj);
    }

    this.nextIssueId++;
    this.newIssueBoards = '';
    this.selectedMatIconName = 'add';
    this.toggleInputField(inputField);
    this.taskNameToAdd = issueNameToAdd; // Update the displayed task name
  }

  deleteIssue(listType: 'boards' | 'backlogs', item: Issue) {
    if (listType === 'boards') {
      const indexToDelete = this.issueList.findIndex((issue) => issue === item);
      if (indexToDelete !== -1) {
        this.issueList.splice(indexToDelete, 1);
      }
    } else if (listType === 'backlogs') {
      const indexToDelete = this.backlogList.findIndex((issue) => issue === item);
      if (indexToDelete !== -1) {
        this.backlogList.splice(indexToDelete, 1);
      }
    }

    // Ensure editMode is set to false for the deleted item
    item.editMode = false;
  }

  updateItem(type: 'boards' | 'backlogs') {
    if (type === 'boards' && this.showInputFieldBoards) {
      const lastIssueBoards = this.issueList[this.issueList.length - 1];
      lastIssueBoards.issueName = this.newIssueBoards;
      this.newIssueBoards = '';
      this.showInputFieldBoards = false;
    } else if (type === 'backlogs' && this.showInputFieldBacklogs) {
      const lastIssueBacklogs = this.backlogList[this.backlogList.length - 1];
      lastIssueBacklogs.issueName = this.newIssueBacklogs;
      this.newIssueBacklogs = '';
      this.showInputFieldBacklogs = false;
    }
  }

  closeInputField(type: 'boards' | 'backlogs') {
    this.newIssue = '';
    if (type === 'boards') {
      this.showInputFieldBoards = false;
    } else if (type === 'backlogs') {
      this.showInputFieldBacklogs = false;
    }
  }



  toggleInputField(inputField: string) {
    if (inputField === 'boards') {
      this.showInputFieldBoards = !this.showInputFieldBoards;
    } else if (inputField === 'backlogs') {
      this.showInputFieldBacklogs = !this.showInputFieldBacklogs;
    }
    if (!this.showInputFieldBoards && !this.showInputFieldBacklogs) {
      this.newIssueBoards = '';
      this.selectedMatIconName = 'add';
    }
  }
}

interface Issue {
  id: number;
  issueName: string;
  editMode: boolean;
  toolTipValue: string
  issueType: any;
  iconColor: any;
}

interface BacklogIssue {
  id: number;
  issueName: string;
  editMode: boolean;
}