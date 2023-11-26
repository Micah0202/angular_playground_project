import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Band } from '../band';
import { BandService } from '../band.service';
import { MatDialog } from '@angular/material/dialog';
import { BandComponent } from '../band/band.component';
import { DatePipe } from '@angular/common';
//import bandlist from '../../assets/json/band.json';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss'],
})
export class BandListComponent implements OnInit {
  //bands : Band[];
  //bandlist:any;
  // dialogBoxData!: Band;
  data!: Band;
  // @ViewChild('dialogref') dialogref!: TemplateRef<Band>;
  //@Output() createNew = new EventEmitter<void>();
  @ViewChild(BandComponent) child!: BandComponent;
  @ViewChild('dialogBox') dialogBox!: TemplateRef<Band>;
  bands: Band[] = [];

  constructor(private bandService: BandService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // this.bands = bandslis;
    this.bandService.getBandsList().subscribe((data) => {
      console.log('Band data', data);
      this.bands = data;
    });
  }

  AddNewBand() {
    console.log('AddNewBand');
    this.child.createBandDialogBox();
  }
}
