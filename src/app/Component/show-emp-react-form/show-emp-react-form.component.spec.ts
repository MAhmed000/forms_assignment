import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpReactFormComponent } from './show-emp-react-form.component';

describe('ShowEmpReactFormComponent', () => {
  let component: ShowEmpReactFormComponent;
  let fixture: ComponentFixture<ShowEmpReactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmpReactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEmpReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
