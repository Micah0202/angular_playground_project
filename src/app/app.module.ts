import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandComponent } from './band/band.component';
import { BandService } from './band.service';
import { BandListComponent } from './band-list/band-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BandDetailsDialogComponent } from './band-details-dialog/band-details-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add these imports

@NgModule({
  declarations: [
    AppComponent,
    BandComponent,
    BandListComponent,
    BandDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule, // Add FormsModule
    ReactiveFormsModule, // Add ReactiveFormsModule
  ],
  providers: [BandService],
  bootstrap: [AppComponent],
})
export class AppModule {}
