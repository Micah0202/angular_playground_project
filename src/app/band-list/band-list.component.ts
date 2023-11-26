import { Component, OnInit } from '@angular/core';
import { BandService } from '../band.service';
import { Band } from '../band';
import { MatDialog } from '@angular/material/dialog';
import { BandDetailsDialogComponent } from '../band-details-dialog/band-details-dialog.component';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss'],
})
export class BandListComponent implements OnInit {
  bands: Band[] = []; // Define an array to hold the band data

  constructor(
    private bandService: BandService,
    private dialog: MatDialog //This service is provided by Angular Material's MatDialog module and is used to open a dialog for displaying band details.
  ) {}
  ngOnInit(): void {
    // Fetch data from the service
    this.bandService.getBandsList().subscribe((data) => {
      this.bands = data;
    });
  }
  // This function is designed to open a details dialog for a specific band.
  openDetailsDialog(band: Band): void {
    //This code opens the dialog using Angular Material's MatDialog service
    //TODO - open takes the component that will be displayed in the dialog and config of the dialog
    const dialogRef = this.dialog.open(BandDetailsDialogComponent, {
      width: '500px', // Adjust the width as needed
      data: band, // Pass the band data to the dialog
    }); //dialog.open is used to open a dialog

    //this code sets up a subscription to the afterClosed() event of the dialogRef.This event occurs after the dialog is closed
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // You can handle any actions after the dialog is closed here if needed.
    });
  }
}
