import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfromComponent } from './editfrom.component';

describe('EditfromComponent', () => {
  let component: EditfromComponent;
  let fixture: ComponentFixture<EditfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
