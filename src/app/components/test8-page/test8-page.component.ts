import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-test8-page',
  templateUrl: './test8-page.component.html',
  styleUrls: ['./test8-page.component.scss']
})
export class Test8PageComponent implements OnInit {

  recordPayment: FormGroup;
  selectedFiles: File[] = [];

  constructor(private fb: FormBuilder, private snackbar : MatSnackBar) {
    this.recordPayment = this.fb.group({
      paymentMade: [null, Validators.required],
      paymentNumber: [null, Validators.required],
      referenceNumber: [null, Validators.required],
      paidThrough: [null, Validators.required],
      paymentMode: [null, Validators.required],
      selectedDate: [null, Validators.required],
      notes: [null, Validators.required],
      attachments: [[]],
    });
  }

  paymentThroughOptions = [ 
    { value: 'optionA', label: 'Option A' },
    { value: 'optionB', label: 'Option B' },
    { value: 'optionC', label: 'Option C' }
  ];

  paidThroughOptions = [
    { value: 'optionA', label: 'Option A' },
    { value: 'optionB', label: 'Option B' },
    { value: 'optionC', label: 'Option C' }
  ];
  ngOnInit(): void {
  }
  addAttachment(fileInput: HTMLInputElement) {
    if (fileInput.files && fileInput.files.length > 0) {
      const files = Array.from(fileInput.files);
      this.selectedFiles = this.selectedFiles.concat(files);
      this.recordPayment.get('attachments').setValue(this.selectedFiles);
      fileInput.value = '';
    }
  }

  removeAttachment(file: File) {
    this.selectedFiles = this.selectedFiles.filter((f) => f !== file);
    this.recordPayment.get('attachments').setValue(this.selectedFiles);
  }

  onSaveClick() {
    console.log('Save button clicked');
    const formValues = this.recordPayment.value;
    console.log('Form Values:', formValues);
  
    // Check if any required field is not selected
    if (!formValues.paymentMade || !formValues.paymentNumber || !formValues.referenceNumber) {
      this.showSnackbar('Please fill in all the details');
    } else {
      // All required fields are selected, proceed with saving
      const paymentMadeValue = formValues.paymentMade;
      console.log('Number 1 Value:', paymentMadeValue);
      // Your saving logic here
    }
  }
  
  private showSnackbar(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
    });
  }
  


}
