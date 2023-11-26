import { Component, OnInit, Input } from '@angular/core';
import { BandService } from '../band.service';
import { Band } from '../band';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss'],
})
export class BandComponent implements OnInit {
  //@Input() means band can receive data from input
  //@Input() is used to indicate that band is a property that can receive data from its parent component.
  @Input() band: Band | undefined; // Define a variable to hold the single band data

  constructor(private bandService: BandService) {}
  ngOnInit(): void {
    // Fetch the single record from the service
    // this.bandService.getBandById().subscribe((data) => {
    //   this.band = data;
    // });
  }
}
