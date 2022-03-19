import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenseMensuelleComponent } from './depense-mensuelle.component';

describe('DepenseMensuelleComponent', () => {
  let component: DepenseMensuelleComponent;
  let fixture: ComponentFixture<DepenseMensuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepenseMensuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenseMensuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
