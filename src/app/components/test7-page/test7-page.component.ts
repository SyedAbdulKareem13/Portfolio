import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test7-page',
  templateUrl: './test7-page.component.html',
  styleUrls: ['./test7-page.component.scss'],
})
export class Test7PageComponent implements OnInit {
  response = [
    {
      id: 1,
      iteration_name: 'PSG Implementation 01',
      completionPercentage: '0.00%',
      requirementsCompleted: 4,
      developmentCompleted: 0,
      totalRequirementsForDev: 4,
      projectSummary: [
        {
          moduleName: 'Unknown',
          requirementsApproved: 3,
          commitedData: 1,
          testingInprogress: 0,
          done: 0,
          totalRequirement: 4,
          totalPBISforProject: 1,
        },
      ],
    },
    {
      id: 2,
      iteration_name: 'Another Iteration',
      completionPercentage: '25.00%',
      requirementsCompleted: 5,
      developmentCompleted: 2,
      totalRequirementsForDev: 7,
      projectSummary: [
        {
          moduleName: 'Module 2',
          requirementsApproved: 2,
          commitedData: 2,
          testingInprogress: 1,
          done: 0,
          totalRequirement: 5,
          totalPBISforProject: 2,
        },
      ],
    },
    {
      id: 3,
      iteration_name: 'Iteration 3',
      completionPercentage: '50.00%',
      requirementsCompleted: 6,
      developmentCompleted: 4,
      totalRequirementsForDev: 8,
      projectSummary: [
        {
          moduleName: 'Module 3',
          requirementsApproved: 3,
          commitedData: 1,
          testingInprogress: 2,
          done: 0,
          totalRequirement: 6,
          totalPBISforProject: 2,
        },
      ],
    },
    {
      id: 4,
      iteration_name: 'Iteration 4',
      completionPercentage: '75.00%',
      requirementsCompleted: 7,
      developmentCompleted: 6,
      totalRequirementsForDev: 9,
      projectSummary: [
        {
          moduleName: 'Module 4',
          requirementsApproved: 4,
          commitedData: 2,
          testingInprogress: 1,
          done: 0,
          totalRequirement: 7,
          totalPBISforProject: 3,
        },
      ],
    },
    {
      id: 5,
      iteration_name: 'Iteration 5',
      completionPercentage: '100.00%',
      requirementsCompleted: 8,
      developmentCompleted: 8,
      totalRequirementsForDev: 10,
      projectSummary: [
        {
          moduleName: 'Module 5',
          requirementsApproved: 5,
          commitedData: 2,
          testingInprogress: 1,
          done: 0,
          totalRequirement: 8,
          totalPBISforProject: 4,
        },
      ],
    },
  ];

  requirementsCompleted: number;
  developmentCompleted: number;

  constructor() {}

  ngOnInit(): void {
    // this.calculateModuleData();
  }

  // calculateModuleData() {
  //   this.response.forEach(item => {
  //     const module = item.projectSummary[0];
  //     this.requirementsCompleted = module.requirementsApproved + module.commitedData + module.testingInprogress + module.done;
  //     this.developmentCompleted = module.testingInprogress + module.done;
  //   });
  // }

  percentageToNumber(percentage: string): number {
    return parseFloat(percentage.replace('%', ''));
  }
}
