import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import gsap from 'gsap';

@Component({
  selector: 'app-test2-page',
  templateUrl: './test2-page.component.html',
  styleUrls: ['./test2-page.component.scss']
})
export class Test2PageComponent implements OnInit {
  @ViewChild('svgContainer', { static: true }) svgContainerRef: ElementRef<SVGSVGElement>;
  loginForm: FormGroup;
  submitted = false;
  loggedIn = false;
  logIn: boolean;
  constructor(private formBuilder: FormBuilder) { }

  isLoading: boolean = false;
  items: string[] = [
    'Setting Up Demo System',
    'Configuring Demo User',
    'Setting Up Your Sample Data',
    'All Set, Let\'s Explore'
  ];
  showItem: boolean[] = [false, false, false, false];

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.logIn = true;
  }

  get f() {
    return this.loginForm.controls;
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
      this.logIn = false;
    }
  }

  logout() {
    this.logIn = true;

  }
}
