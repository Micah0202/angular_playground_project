import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandComponent } from './band/band.component';
import { BandService } from './band.service';
import { BandListComponent } from './band-list/band-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Replace with the correct path to your service file
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, BandComponent, BandListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [BandService, DatePipe], //now BandService can be injected into any component of your choice and not just Band
  bootstrap: [AppComponent],
})
export class AppModule {}
