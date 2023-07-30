import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test6PageComponent } from './test6-page.component';

describe('Test6PageComponent', () => {
  let component: Test6PageComponent;
  let fixture: ComponentFixture<Test6PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test6PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test6PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
