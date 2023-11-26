import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandDetailsDialogComponent } from './band-details-dialog.component';

describe('BandDetailsDialogComponent', () => {
  let component: BandDetailsDialogComponent;
  let fixture: ComponentFixture<BandDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(BandDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
