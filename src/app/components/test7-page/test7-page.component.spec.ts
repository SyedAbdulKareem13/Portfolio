import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test7PageComponent } from './test7-page.component';

describe('Test7PageComponent', () => {
  let component: Test7PageComponent;
  let fixture: ComponentFixture<Test7PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test7PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test7PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
