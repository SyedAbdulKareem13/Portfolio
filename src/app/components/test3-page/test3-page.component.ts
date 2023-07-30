import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-test3-page',
  templateUrl: './test3-page.component.html',
  styleUrls: ['./test3-page.component.scss']
})
export class Test3PageComponent implements OnInit {
  // htmlTest = `<p> HIHkjsf </p>`;


  // withdrawnstatus = [
  //   {
  //     id: 1,
  //     maticon: 'face',
  //     request: 'Resignation',
  //     submittedDate: '22 July 2023',
  //     revertedDate: '22 July 2023',
  //     currentStatus: 'In Progress',
  //   },
  // ];


  // alldataForm = [
  //   {
  //     _id: "64946309d1b85d8ef26accd6",
  //     field_default_value: 1,
  //     has_default_value: false,
  //     field_key: "laptop",
  //     view_key: "system_admin",
  //     is_mandatory: true,
  //     is_active_field: true,
  //     field_label: "Laptop",
  //     sub_field_label: "Received?",
  //     is_active: true,
  //     has_master_data: false,
  //     master_data_info: {
  //       table_name: "m_exit_options",
  //       id_field: "id",
  //       name_field: "name"
  //     },
  //     field_type: "toggle-button",
  //     sort_order: 1,
  //     options: [
  //       { id: 1, name: "Yes" },
  //       { id: 2, name: "No" },
  //       { id: 3, name: "N/A" }
  //     ]
  //   },
  //   {
  //     _id: "64946309d1b85d8ef26accd6",
  //     field_default_value: 1,
  //     has_default_value: false,
  //     field_key: "laptop",
  //     view_key: "system_admin",
  //     is_mandatory: true,
  //     is_active_field: true,
  //     field_label: "",
  //     sub_field_label: "Damaged?",
  //     is_active: true,
  //     has_master_data: false,
  //     master_data_info: {
  //       table_name: "m_exit_options",
  //       id_field: "id",
  //       name_field: "name"
  //     },
  //     field_type: "toggle-button",
  //     sort_order: 1,
  //     options: [
  //       { id: 1, name: "Yes" },
  //       { id: 2, name: "No" }
  //     ]
  //   },
  // ];

  epicData = [{
    epicName: "Add Epic",
    epicNumber: "Add Feature Number",
    epicSection: 'Add Section ID'
  }
  ]
  handleMatIconClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'MAT-ICON' || target.tagName === 'BUTTON') {
      this.openThis();
    }
  }
  openThis() {
    console.log('The openThis() function is called.');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
