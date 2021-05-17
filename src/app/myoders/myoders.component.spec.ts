import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyodersComponent } from './myoders.component';

describe('MyodersComponent', () => {
  let component: MyodersComponent;
  let fixture: ComponentFixture<MyodersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyodersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
