import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlaceLocation } from 'src/app/places/location.model';
import { environment } from 'src/environments/environment';
import { MapModalComponent } from '../../map-modal/map-modal.component';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  // @Output() makes it listenable from the outside
  @Output() locationPick = new EventEmitter<PlaceLocation>();
  selectedLocationImage: string;
  isLoading = false;

  constructor(private modalCtrl: ModalController, private http: HttpClient) {}

  ngOnInit() {}

  onPickLocation() {
    this.modalCtrl
      .create({
        component: MapModalComponent,
      })
      .then((modalEl) => {
        // promise that will resolve as soon as it did dismiss
        modalEl.onDidDismiss().then((modalData) => {
          if (!modalData.data) {
            return;
          }
          const pickedLocation: PlaceLocation = {
            latitude: modalData.data.latitude,
            longitude: modalData.data.longitude,
            address: null,
            staticMapImageUrl: null,
          };
          this.isLoading = true;
          this.getAddress(modalData.data.latitude, modalData.data.longitude)
            // switchMap allows us to take the result
            // of Observable 1, and return a new Observable
            .pipe(
              switchMap((address) => {
                pickedLocation.address = address;
                return of(
                  this.getMapImage(
                    pickedLocation.latitude,
                    pickedLocation.longitude,
                    14
                  )
                );
              })
            )
            .subscribe((staticMapImageUrl) => {
              pickedLocation.staticMapImageUrl = staticMapImageUrl;
              this.selectedLocationImage = staticMapImageUrl;
              this.isLoading = false;
              this.locationPick.emit(pickedLocation);
            });
        });
        modalEl.present();
      });
  }

  private getAddress(latitude: number, longitude: number) {
    return this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${environment.googleMapsAPIKey}`
      )
      .pipe(
        map((geoData) => {
          if (!geoData || !geoData.results || geoData.results.length === 0) {
            return null;
          }
          return geoData.results[0].formatted_address;
        })
      );
  }

  private getMapImage(latitude: number, longitude: number, zoom: number) {
    // no need to send to send a request since this is a string
    // that will yield an image which dynamically generated on Google servers
    // and we will dynamically use that as a source for our images in our application
    // center=lat,lng
    // zoom=...
    // size=widthxheight
    // maptype=roadmap or other
    // &markers
    // label:YourLabel
    // after that you have coordinates for the marker
    // key=APIKEY
    return `https://maps.googleapis.com/maps/api/staticmap?
    center=${latitude},${longitude}
    &zoom=${zoom}
    &size=500x300&maptype=roadmap
    &markers=color:red%7Clabel:Place%7C${latitude},${longitude}
    &key=${environment.googleMapsAPIKey}`;
  }
}
