import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { Test2PageComponent } from '../test2-page/test2-page.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test4-page',
  templateUrl: './test4-page.component.html',
  styleUrls: ['./test4-page.component.scss']
})

export class Test4PageComponent implements OnInit {


  constructor(private _bottomSheet: MatBottomSheet,
    private matDialog: MatDialog) { }


  createDialogRef: MatDialogRef<any>;

  ngOnInit(): void {
  }


  openMoreInfoSheet() {
    this.createDialogRef = this.matDialog.open(BottomSheetComponent, {
      height: '45%',
      width: '100vw',
      position: {
        bottom: 1,
        left: 0,
      },
      hasBackdrop: false,
      disableClose: true,
      animation: {
        entryAnimation: {
          keyframes: [
            { transform: 'translateY(-50%)' },
            { transform: 'translateY(0)' },
          ],
          keyframeAnimationOptions: {
            duration: 250,
            easing: 'ease-in-out',
          },
        },
        exitAnimation: {
          keyframes: [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-50%)' },
          ],
          keyframeAnimationOptions: {
            duration: 250,
            easing: 'ease-in-out',
          },
        },
      },
    });


    this.createDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
