import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuMensuelComponent } from './revenu-mensuel.component';

describe('RevenuMensuelComponent', () => {
  let component: RevenuMensuelComponent;
  let fixture: ComponentFixture<RevenuMensuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuMensuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuMensuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
