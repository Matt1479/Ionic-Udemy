import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MapModalComponent } from './map-modal/map-modal.component';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';

@NgModule({
  declarations: [LocationPickerComponent, MapModalComponent],
  // for *ngIf, Ionic Components
  imports: [CommonModule, IonicModule],
  // to be able to use those in different components
  exports: [LocationPickerComponent, MapModalComponent],
})
export class SharedModule {}
