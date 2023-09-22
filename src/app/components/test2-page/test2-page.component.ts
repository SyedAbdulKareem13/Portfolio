import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import gsap from 'gsap';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonServicesService } from 'src/app/services/common-services.service';

@Component({
  selector: 'app-test2-page',
  templateUrl: './test2-page.component.html',
  styleUrls: ['./test2-page.component.scss']
})
export class Test2PageComponent implements OnInit {
  registrationForm: FormGroup;
  @ViewChild('svgContainer', { static: true }) svgContainerRef: ElementRef<SVGSVGElement>;
  loginForm: FormGroup;
  submitted = false;
  loggedIn = false;


  shows = false;
  registerFlag: boolean;
  openViewData = false;
  regpage: boolean;
  showData = false;
  students: any[] = [];
  studentData: any = {};
  showGif = false;
  allStudents: any[] = [];
  allDataShowStudents = false;
  currentPage: number = 1;
  startingIndex = 1;
  selectedStudent: any;
  editMode: boolean;




  constructor(private formBuilder: FormBuilder, private http: HttpClient, private openSnack: MatSnackBar, private commonService: CommonServicesService) {
    this.registrationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_id: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  isLoading: boolean = false;
  items: string[] = [
    'This API is damn fast',
    'Just added this for the UI experience',
    'Kinldy wait ',
    'Karthik Anna, All Set, '
  ];
  showItem: boolean[] = [false, false, false, false];


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.registerFlag = true;
    this.regpage = true;
    // this.openViewData = true; 
  }

  get f() {
    return this.loginForm.controls;

  }

  get j() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.isLoading = true;
    for (let i = 0; i < this.items.length; i++) {
      setTimeout(() => {
        this.showItem[i] = true;
      }, i * 700);
    }
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.registerFlag = false;
    }
  }

  logout() {
    this.registerFlag = true;
    this.loggedIn = false;

  }

  showLogin() {
    this.registerFlag = false;
    // this.loggedIn = true;

  }

  showRegistration() {
    this.registerFlag = true;
  }


  onRegister() {
    this.submitted = true;
    this.isLoading = true;

    if (this.registrationForm.invalid) {
      this.openSnack.open('Kindly fill all the fields', 'Ok');
      this.isLoading = false;
      return;
    }

    const formValues = {
      first_name: this.registrationForm.get('first_name').value,
      last_name: this.registrationForm.get('last_name').value,
      email_id: this.registrationForm.get('email_id').value,
      birthdate: this.registrationForm.get('birthdate').value,
      password_hash: this.registrationForm.get('password').value,
    };

    console.log('Received registration request:', formValues);

    this.commonService.insertStudentData(formValues).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.openSnack.open('Registration successful!', 'Close', {
          duration: 3000,
        });
        this.regpage = false;
        this.openViewData = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      },
      (error) => {
        console.error('Registration error:', error);
        this.openSnack.open('Registration error: ' + error.message, 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar'],
        });
        this.isLoading = false;
      }
    );
  }



  openData() {
    this.registerFlag = true;
    this.commonService.getStudentData().subscribe(
      (data: any[]) => {
        this.students = data;
        this.showData = true;
        // console.log(this.students,'ssssss');
        // console.log(data,'uuuuuuuuu');
      },
      (error) => {
        console.error('Error retrieving student data:', error);
      }
    );
  }



  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = {
      email_id: this.f.username.value, // Assuming 'username' corresponds to 'email_id'
      password_hash: this.f.password.value, // Assuming 'password' corresponds to 'password_hash'
    };

    this.commonService.login(credentials).subscribe(
      (response) => {
        if (response.success) {
          this.loggedIn = true;
          this.openSnack.open('Login Success', 'Ok');
          this.shows = false;
          this.regpage = false;
          this.openViewData = true;



        } else {
          this.openSnack.open('Wrong Credentials', 'Ok');
        }
      },
      (error) => {
        this.openSnack.open('Login Error')
      }
    );
  }


  playAudio(): void {
    const audio = document.getElementById('hoverSound') as HTMLAudioElement;
    audio.currentTime = 13; // Reset audio to start if it's already playing
    audio.play();
    console.log('afualsfjflkjasd;fljas;');
    this.showGif = true;
  }

  stopAudio(): void {
    const audio = document.getElementById('hoverSound') as HTMLAudioElement;
    audio.pause();
    audio.currentTime = 0; // Rewind to the beginning of the audio
    this.showGif = false;
  }


  openAllData() {
    console.log('Button clicked');
    this.commonService.getAllStudentData().subscribe(
      (data1: any[]) => {
        this.allStudents = data1;
        console.log(this.allStudents, 'ddddddddddddd');
        this.allDataShowStudents = true;
      }
    );
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.startingIndex = (this.currentPage - 1) * 5 + 1;
      this.commonService.getStudentsByPage(this.currentPage).subscribe(
        (data: any[]) => {
          this.allStudents = data;
          this.allDataShowStudents = true;
        },
        (error) => {
          console.error('Error retrieving student data:', error);
        }
      );
    }
  }

  nextFiveData() {
    this.currentPage++; // Increment the current page number
    this.startingIndex = (this.currentPage - 1) * 5 + 1;
    this.commonService.getStudentsByPage(this.currentPage).subscribe(
      (data: any[]) => {
        this.allStudents = data;
        this.allDataShowStudents = true;
      },
      (error) => {
        console.error('Error retrieving student data:', error);
      }
    );
  }

  closeAllData() {
    this.allDataShowStudents = false;
  }

  selectStudent(student: any) {
    this.selectedStudent = { ...student };
    this.editMode = false;
  }

  editStudent(student: any) {
    this.selectedStudent = { ...student };
    this.editMode = true;
  }

  saveStudent(student: any) {
    this.commonService.updateStudent(student).subscribe(
      (response) => {
        this.editMode = true;
        this.editMode = false;
        this.openSnack.open('Student updated successfully:', 'Ok');
        console.log('Student updated successfully:', response);
      },
      (error) => {
        this.openSnack.open('Error');
        console.error('Error updating student:', error);
      }
    );
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  toggleEdit(student: any) {
    student.isEditing = !student.isEditing;
  }

  cancelEdit(item) {
    item.isEditing = false;
  }

  deleteData(item) {

  }










}
