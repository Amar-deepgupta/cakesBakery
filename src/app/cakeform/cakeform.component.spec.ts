import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeformComponent } from './cakeform.component';

describe('CakeformComponent', () => {
  let component: CakeformComponent;
  let fixture: ComponentFixture<CakeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
