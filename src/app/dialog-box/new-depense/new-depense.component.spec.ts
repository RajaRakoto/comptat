import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDepenseComponent } from './new-depense.component';

describe('NewDepenseComponent', () => {
  let component: NewDepenseComponent;
  let fixture: ComponentFixture<NewDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDepenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
