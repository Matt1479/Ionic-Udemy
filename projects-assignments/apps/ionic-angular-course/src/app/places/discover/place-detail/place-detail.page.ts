import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ActionSheetController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navController: NavController,
    private placesService: PlacesService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (!params.placeId) {
        this.navController.navigateBack('/places/tabs/discover');
      }
      this.place = this.placesService.getPlace(params.placeId);
    });
  }

  onBookPlace() {
    // this.navController.navigateBack('/places/tabs/discover');
    this.actionSheetController
      .create({
        header: 'Choose an Action',
        buttons: [
          {
            text: 'Select Date',
            handler: () => {
              this.openBookingModal('select');
            },
          },
          {
            text: 'Random Date',
            handler: () => {
              this.openBookingModal('random');
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

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);

    this.modalController
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place, selectedMode: mode },
      })
      .then((modalElement) => {
        modalElement.present();
        return modalElement.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);

        if (resultData.role === 'confirm') {
          console.log('BOOKED');
        }
      });
  }
}
