import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1PageComponent } from './components/test1-page/test1-page.component';
import { Test2PageComponent } from './components/test2-page/test2-page.component';
import { Test3PageComponent } from './components/test3-page/test3-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



import { Test4PageComponent } from './components/test4-page/test4-page.component';
import { Test5PageComponent } from './components/test5-page/test5-page.component';
import { Test6PageComponent } from './components/test6-page/test6-page.component';
import { Test7PageComponent } from './components/test7-page/test7-page.component';
import { Test8PageComponent } from './components/test8-page/test8-page.component';
import { Test9PageComponent } from './components/test9-page/test9-page.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    Test1PageComponent,
    Test2PageComponent,
    Test3PageComponent,
    HomePageComponent,
    Test4PageComponent,
    Test5PageComponent,
    Test6PageComponent,
    Test7PageComponent,
    Test8PageComponent,
    Test9PageComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    DragDropModule,
    MatMenuModule,
    MatTooltipModule,
    MatBottomSheetModule,
    HttpClientModule
    // NgxSkeletonLoaderModule

  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
