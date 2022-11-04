import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import {
  ActionSheetController,
  AlertController,
  ModalController,
} from '@ionic/angular';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Coordinates, PlaceLocation } from 'src/app/places/location.model';
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
  @Input() showPreview = false;
  selectedLocationImage: string;
  isLoading = false;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  onPickLocation() {
    this.actionSheetCtrl
      .create({
        header: 'Please Choose',
        buttons: [
          {
            text: 'Auto-Locate',
            handler: () => {
              this.locateUser();
            },
          },
          {
            text: 'Pick on Map',
            handler: () => {
              this.openMap();
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
          },
        ],
      })
      .then((actionSheetEl) => {
        actionSheetEl.present();
      });
  }

  private locateUser() {
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      this.showErrorAlert();
      return;
    }
    this.isLoading = true;
    Geolocation.getCurrentPosition()
      .then((geoPosition) => {
        const coordinates: Coordinates = {
          latitude: geoPosition.coords.latitude,
          longitude: geoPosition.coords.longitude,
        };
        this.createPlace(coordinates.latitude, coordinates.longitude);
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.showErrorAlert();
      });
  }

  private showErrorAlert() {
    this.alertCtrl
      .create({
        header: 'Could not fetch location',
        message: 'Please use the map to pick a location',
        buttons: ['Okay'],
      })
      .then((alertEl) => alertEl.present());
  }

  private openMap() {
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
          const coordinates: Coordinates = {
            latitude: modalData.data.latitude,
            longitude: modalData.data.longitude,
          };
          this.createPlace(coordinates.latitude, coordinates.longitude);
        });
        modalEl.present();
      });
  }

  private createPlace(latitude: number, longitude: number) {
    const pickedLocation: PlaceLocation = {
      latitude: latitude,
      longitude: longitude,
      address: null,
      staticMapImageUrl: null,
    };
    this.isLoading = true;
    this.getAddress(latitude, longitude)
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
