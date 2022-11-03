import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MapModalComponent } from './map-modal/map-modal.component';
import { ImagePickerComponent } from './pickers/image-picker/image-picker.component';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';

@NgModule({
  declarations: [
    LocationPickerComponent,
    MapModalComponent,
    ImagePickerComponent,
  ],
  // for *ngIf, Ionic Components
  imports: [CommonModule, IonicModule],
  // to be able to use those in different components
  exports: [LocationPickerComponent, MapModalComponent, ImagePickerComponent],
})
export class SharedModule {}
