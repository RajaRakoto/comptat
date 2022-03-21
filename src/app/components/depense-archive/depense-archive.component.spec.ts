import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenseArchiveComponent } from './depense-archive.component';

describe('DepenseArchiveComponent', () => {
  let component: DepenseArchiveComponent;
  let fixture: ComponentFixture<DepenseArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepenseArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenseArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
