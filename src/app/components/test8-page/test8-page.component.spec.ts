import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test8PageComponent } from './test8-page.component';

describe('Test8PageComponent', () => {
  let component: Test8PageComponent;
  let fixture: ComponentFixture<Test8PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test8PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test8PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
