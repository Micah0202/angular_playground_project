import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Band } from '../band';
import { BandService } from '../band.service';
import { Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

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
  createForm!: FormGroup;
  editForm!: FormGroup;
  isChecked!: Boolean;
  private bandSubscription: Subscription | undefined;
  //band = {} as Band ;
  constructor(
    private dialog: MatDialog,
    private bandService: BandService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router
  ) {
    //console.log(this.band);
  }

  ngOnInit(): void {
    //this.isChecked = true
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
    // this.updateEmployee();
    let date = new Date();
    this.band.createdBy = 'Micah';
    this.band.createdDate = date;
    this.bandService
      .updateBand(BandUpdateData['id'], BandUpdateData)
      .subscribe((data) => {
        console.log('Band data', data);

        // window.location.reload();
        this.router.navigate(['/bands']);
      });
  }

  /*************************next templte for  add band****************************************@@@@@@@@@@@@@@@@@@@@** */

  saveBand() {
    let date = new Date();

    this.bandSubscription = this.bandService.createBand(this.band).subscribe({
      next: (data) => {
        console.log(data);
        this.goToBandList();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  goToBandList() {
    this.router.navigate(['/bands']);
  }
  onSubmit() {
    this.saveBand();
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
