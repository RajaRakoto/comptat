import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuArchiveComponent } from './revenu-archive.component';

describe('RevenuArchiveComponent', () => {
  let component: RevenuArchiveComponent;
  let fixture: ComponentFixture<RevenuArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
