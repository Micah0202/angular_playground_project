import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandComponent } from './band.component';

describe('BandComponent', () => {
  let component: BandComponent;
  let fixture: ComponentFixture<BandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandComponent]
    });
    fixture = TestBed.createComponent(BandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
