import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonServicesService } from 'src/app/services/common-services.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
    animations: [
      trigger('carouselAnimation', [
        state('prev', style({ transform: 'translateX(100%)' })),
        state('next', style({ transform: 'translateX(-100%)' })),
        state('*', style({ transform: 'translateX(0)' })),
        transition('* <=> prev', animate('300ms ease-in-out')),
        transition('* <=> next', animate('300ms ease-in-out')),
      ]),
    ],
  })
export class BottomSheetComponent implements OnInit {
  @Input() items: any[] = [];
  currentIndex = 0;
  itemsPerPage = 4;
  currentPage = 0;
  searchTerm: string = '';
  fieldData: any[] = [];
  visibleItems: any[] = [];

  constructor(private _dialogref: MatDialogRef<BottomSheetComponent>,
    private http: HttpClient,
    private _common : CommonServicesService ) {
  }

  // ngOnInit(): void {
  //   this.fieldData = [
  //     {
  //       id: 1,
  //       fieldName: 'First Name',
  //       fieldDescription: 'Enter the user\'s first name.'
  //     },
  //     {
  //       id: 2,
  //       fieldName: 'Last Name',
  //       fieldDescription: 'Enter the user\'s last name.'
  //     },
  //     {
  //       id: 3,
  //       fieldName: 'Email Address',
  //       fieldDescription: 'Enter the user\'s email address.Upload the user\'s profile picture.Upload the user\'s profile picture.Upload the user\'s profile picture.'
  //     },
  //     {
  //       id: 4,
  //       fieldName: 'Phone Number',
  //       fieldDescription: 'Enter the user\'s phone number.'
  //     },
  //     {
  //       id: 5,
  //       fieldName: 'Date of Birth',
  //       fieldDescription: 'Enter the user\'s date of birth.'
  //     },
  //     {
  //       id: 6,
  //       fieldName: 'Address',
  //       fieldDescription: 'Enter the user\'s home address.'
  //     },
  //     {
  //       id: 7,
  //       fieldName: 'Gender',
  //       fieldDescription: 'Select the user\'s gender.'
  //     },
  //     {
  //       id: 8,
  //       fieldName: 'Profile Picture',
  //       fieldDescription: 'Upload the user\'s profile picture.'
  //     },
  //     {
  //       id: 9,
  //       fieldName: 'Occupation',
  //       fieldDescription: 'Enter the user\'s occupation.'
  //     },
  //     {
  //       id: 10,
  //       fieldName: 'Education',
  //       fieldDescription: 'Enter the user\'s education details.'
  //     },
  //     {
  //       id: 11,
  //       fieldName: 'Interests',
  //       fieldDescription: 'List the user\'s interests and hobbies.'
  //     },
  //     {
  //       id: 12,
  //       fieldName: 'Favorite Books',
  //       fieldDescription: 'Share the user\'s favorite books.'
  //     },
  //     {
  //       id: 13,
  //       fieldName: 'Social Media Links',
  //       fieldDescription: 'Provide links to the user\'s social media profiles.'
  //     },
  //     {
  //       id: 14,
  //       fieldName: 'Emergency Contact',
  //       fieldDescription: 'Enter the user\'s emergency contact information.'
  //     },
  //     {
  //       id: 15,
  //       fieldName: 'Medical History',
  //       fieldDescription: 'Share the user\'s medical history.'
  //     },
  //     {
  //       id: 16,
  //       fieldName: 'Privacy Settings',
  //       fieldDescription: 'Customize the user\'s privacy preferences.'
  //     }
  //   ];
    

  //   this.filterItems();
  // }

  async ngOnInit(){
    this._common.getFieldData().subscribe((data) => {
      this.fieldData = data;
      this.filterItems();
      console.log(data,'ssss');
    });
  }
  // filterItems() {
  //   if (!this.searchTerm) {
  //     // Show 4 items based on pagination
  //     this.visibleItems = this.fieldData.slice(
  //       this.currentPage * this.itemsPerPage,
  //       (this.currentPage + 1) * this.itemsPerPage
  //     );
  //   } else {
  //     const filteredItems = this.fieldData.filter((item) =>
  //       item.fieldName.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     );
  //     this.visibleItems = filteredItems.slice(0, 4);
  //   }
  // }  
  // onSearchInputChange() {
  //   this.currentPage = 0;
  //   this.filterItems();
  // }

  filterItems() {
    if (!this.searchTerm) {
      // Show 4 items based on pagination
      this.visibleItems = this.fieldData.slice(
        this.currentPage * this.itemsPerPage,
        (this.currentPage + 1) * this.itemsPerPage
      );
    } else {
      const filteredItems = this.fieldData.filter((item) =>
        item.fieldName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.visibleItems = filteredItems.slice(0, 4);
    }
  }

  onSearchInputChange() {
    this.currentPage = 0;
    // Remove the filter action from here, as we will trigger it when the button is clicked
  }

  onSearchButtonClick() {
    // Trigger the filter action when the button is clicked
    this.filterItems();
  }



  get totalPages() {
    return Math.ceil(this.fieldData.length / this.itemsPerPage);
  }

  get currentPageDisplay() {
    return this.currentPage + 1;
  }

  hasPagination(): boolean {
    return this.fieldData.length > this.itemsPerPage && this.visibleItems.length > 0;  }

  hasPreviousData(): boolean {
    return this.currentPage > 0 && this.visibleItems.length > 0;
  }

  hasNextData(): boolean {
    const endIndex = (this.currentPage + 1) * this.itemsPerPage;
    return endIndex < this.fieldData.length && this.visibleItems.length > 0;
  }

  next() {
    this.currentPage = Math.min(this.currentPage + 1, this.totalPages - 1);
    this.filterItems();
  }

  previous() {
    this.currentPage = Math.max(0, this.currentPage - 1);
    this.filterItems();
  }

  close() {
    this._dialogref.close();
  }
}


