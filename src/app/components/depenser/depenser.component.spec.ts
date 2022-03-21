import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenserComponent } from './depenser.component';

describe('DepenserComponent', () => {
  let component: DepenserComponent;
  let fixture: ComponentFixture<DepenserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepenserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
