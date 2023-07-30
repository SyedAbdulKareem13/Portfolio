import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test9PageComponent } from './test9-page.component';

describe('Test9PageComponent', () => {
  let component: Test9PageComponent;
  let fixture: ComponentFixture<Test9PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test9PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test9PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
