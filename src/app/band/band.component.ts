import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Band } from '../band';
import { BandService } from '../band.service';
import { Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { DateValidators } from '../date-validators';

@Component({
  selector: 'app-band ,[app-band]',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss'],
})
export class BandComponent implements OnInit {
  bands: Band[] = []; //changed from refresh
  @Input() band!: Band;
  dialogBoxData!: Band;
  data!: Band;
  @ViewChild('dialogref') dialogref!: TemplateRef<Band>;
  @ViewChild('dialogBox') dialogBox!: TemplateRef<Band>;
  editForm!: FormGroup;
  //updateForm!: FormGroup;
  isChecked!: Boolean;
  // In BandComponent class
  newBand: Band = {
    id: 0, // Or whatever default ID you want to set
    name: '',
    startDate: new Date(),
    endDate: new Date(),
    createdBy: '',
    modifiedBy: '',
    createdDate: '', // You might want to set these on the server side
    modifiedDate: '',
  };

  private bandSubscription: Subscription | undefined;
  //band = {} as Band ;
  createForm = this.fb.group({
    name: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    createdBy: ['', Validators.required],
    modifiedBy: ['', Validators.required],
  });
  constructor(
    private dialog: MatDialog,
    private bandService: BandService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router
  ) {
    //console.log(this.band);
    // this.updateForm = this.fb.group({
    //   // Other form controls...
    //   startDate: ['', Validators.required],
    //   endDate: ['', Validators.required],
    //   // Other form controls...
    // });
  }

  ngOnInit(): void {
    // Add the custom validator to the form group
    this.editForm = this.fb.group(
      {
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        // ... other form controls
      },
      {
        validator: DateValidators.dateLessThan('startDate', 'endDate', {
          dateError: true,
        }),
      }
    );
  }

  //shows dialog ref template when oyu click  on any part of the row
  showData(banddialog: Band) {
    this.dialog.open(this.dialogref, {});
    this.data = banddialog;
  }

  deleteBandById(id: number) {
    this.bandService.deleteBand(id).subscribe((data) => {
      console.log(data);
      window.location.reload();

      //this.bands = data;
    });
  }

  /****************************************next template's functions*************************@@@@@@@@@@@@@@@@@@@@** */

  //when you press the submit  button after updating this functuon will run
  onSubmitUpdate(BandUpdateData: Band) {
    const startDate = new Date(BandUpdateData.startDate);
    const endDate = new Date(BandUpdateData.endDate);

    if (startDate <= endDate) {
      let date = new Date();
      this.band.modifiedDate = this.datePipe.transform(
        date,
        'yyyy-MM-ddTHH:mm:ss'
      )!;
      this.band.modifiedBy = 'Micah';

      this.bandService
        .updateBand(BandUpdateData['id'], BandUpdateData)
        .subscribe((data) => {
          console.log('Band data', data);
          this.router.navigate(['/bands']);
        });
    } else {
      alert('Start date must be less than or equal to end date.');
    }
  }

  /*************************next template for  add band****************************************@@@@@@@@@@@@@@@@@@@@** */

  // saveBand() {
  //   const startDate = new Date(this.newBand.startDate);
  //   const endDate = new Date(this.newBand.endDate);

  //   if (startDate <= endDate) {
  //     let date = new Date();
  //     this.bandSubscription = this.bandService
  //       .createBand(this.newBand)
  //       .subscribe({
  //         next: (data) => {
  //           console.log(data);
  //           this.goToBandList();
  //         },
  //         error: (err) => {
  //           console.error(err);
  //         },
  //       });
  //   } else {
  //     alert('Start date must be less than or equal to end date.');
  //   }
  // }
  saveBand() {
    const startDate = new Date(this.newBand.startDate);
    const endDate = new Date(this.newBand.endDate);

    if (startDate <= endDate) {
      let date = new Date();
      this.newBand.createdDate = this.datePipe.transform(
        date,
        'yyyy-MM-ddTHH:mm:ss'
      )!;
      this.newBand.modifiedDate = this.datePipe.transform(
        date,
        'yyyy-MM-ddTHH:mm:ss'
      )!;

      this.bandSubscription = this.bandService
        .createBand(this.newBand)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.goToBandList();
          },
          error: (err) => {
            console.error(err);
          },
        });
    } else {
      alert('Start date must be less than or equal to end date.');
    }
  }

  goToBandList() {
    this.router.navigate(['/bands']);
  }
  onSubmit() {
    this.saveBand();
    window.location.reload();
  }
  ngOnDestroy() {
    if (this.bandSubscription) {
      this.bandSubscription.unsubscribe();
    }
  }

  createBandDialogBox() {
    console.log('createBand');
    this.dialog.open(this.dialogBox, {
      width: '600px',
      height: '400px',
    });
  }

  // onReadChange() {
  //   // You can update the value or perform any actions here when the checkbox is changed
  //   //console.log(console.log('Yes/No value: ', this.data['lread']));
  //   //console.log(console.log('Yes/No value: ', this.data['lwrite']));
  //   //console.log(console.log('Yes/No value: ', this.data['lspeak']));
  // }
}
