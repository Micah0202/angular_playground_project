import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Band } from '../band';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { BandService } from '../band.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band-details-dialog',
  templateUrl: 'band-details-dialog.component.html',
  styleUrls: ['band-details-dialog.component.scss'],
})
export class BandDetailsDialogComponent {
  data: Band;
  band: any;
  id: any;

  constructor(
    public dialogRef: MatDialogRef<BandDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedData: Band,
    private httpClient: HttpClient, // Inject the HttpClient
    private bandService: BandService,
    private router: Router
  ) {
    this.data = { ...injectedData }; // Create a copy of the injected data
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.bandService.updateBand(this.id, this.band).subscribe((data) => {
      //naviagte to employee list page when success response , so create route for this
      this.goToBandList();
    });
  }
  goToBandList() {
    this.router.navigate(['/bands']);
  }
}
