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

@NgModule({
  declarations: [AppComponent, BandComponent, BandListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [BandService, DatePipe], //now BandService can be injected into any component of your choice and not just Band
  bootstrap: [AppComponent],
})
export class AppModule {}
