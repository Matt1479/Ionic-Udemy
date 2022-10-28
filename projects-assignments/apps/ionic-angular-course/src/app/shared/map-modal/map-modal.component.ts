import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('map') mapElementRef: ElementRef;
  @Input() center = { lat: -34.397, lng: 150.644 };
  @Input() selectable = true;
  @Input() closeButtonText = 'Cancel';
  @Input() title = 'Pick Location';
  clickListener: any;
  googleMaps: any;

  constructor(
    private modalCtrl: ModalController,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getGoogleMaps()
      .then((googleMaps) => {
        this.googleMaps = googleMaps;
        // get access to the (div) element
        const mapEl = this.mapElementRef.nativeElement;
        // googleMaps.Map(a, b);
        // a - HTML Element to render the map in
        // b - starting configuration for the map
        // for example center - defines on which coordinates it should center initially
        const map = new googleMaps.Map(mapEl, {
          // lat - latitude
          // lng - longitude
          center: this.center,
          // zoom - set how far we're zoomed in
          zoom: 16,
        });

        // fire an event as soon as it (map) has been loaded (during first initial load)
        this.googleMaps.event.addListenerOnce(map, 'idle', () => {
          this.renderer.addClass(mapEl, 'visible');
        });

        // if selectable - add click listener
        if (this.selectable) {
          // pick location with a click/tap:
          this.clickListener = map.addListener('click', (event) => {
            const selectedCoords = {
              // event.latLng.lat() - get the latitude coordinates of that event
              latitude: event.latLng.lat(),
              // event.latLng.lng() - get the longitude coordinates...
              longitude: event.latLng.lng(),
            };
            // dismiss upon clicking, and pass the coordinates...
            this.modalCtrl.dismiss(selectedCoords);
          });
        }
        // else add marker without click listener
        else {
          const marker = new googleMaps.Marker({
            // { lat, lng }
            position: this.center,
            map: map,
            title: 'Picked Location',
          });
          marker.setMap(map);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  ngOnDestroy(): void {
    if (this.clickListener) {
      this.googleMaps.event.removeListener(this.clickListener);
    }
  }

  private getGoogleMaps(): Promise<any> {
    const win = window as any;
    const googleModule = win.google; // needed for JS SDK to work
    // if GoogleModule has been loaded then...
    if (googleModule && googleModule.maps) {
      // return google maps module
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
      // rare case in which we actually interact with DOM directly like this
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsAPIKey}`;
      // load in a non-blocking way
      script.async = true;
      script.defer = true;
      // Note: Even if we do interact with the DOM directly, we don't mess with
      // Angular's template here, instead we append this to our root document
      // whereas Angular only has control over a part of this document (body > app-root)
      // so we're not rendering anything into Angular template
      // or into HTML content rendered based on Angular template
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        } else {
          reject('Google maps SDK not available.');
        }
      };
    });
  }
}
