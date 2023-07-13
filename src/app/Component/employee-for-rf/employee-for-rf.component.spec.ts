import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeForRFComponent } from './employee-for-rf.component';

describe('EmployeeForRFComponent', () => {
  let component: EmployeeForRFComponent;
  let fixture: ComponentFixture<EmployeeForRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeForRFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeForRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
