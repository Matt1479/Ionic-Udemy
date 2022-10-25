import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ActionSheetController,
  LoadingController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { BookingsService } from 'src/app/bookings/bookings.service';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place;
  isBookable = false;
  subscription: Subscription;

  constructor(
    private navController: NavController,
    private placesService: PlacesService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private bookingsService: BookingsService,
    private loadingCtrl: LoadingController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (!params.placeId) {
        this.navController.navigateBack('/places/tabs/discover');
      }
      this.subscription = this.placesService
        .getPlace(params.placeId)
        .subscribe((place) => {
          this.place = place;
          this.isBookable = place.userId !== this.authService.userId;
        });
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
        if (resultData.role === 'confirm') {
          this.loadingCtrl
            .create({
              message: 'Booking place...',
            })
            .then((loadingEl) => {
              loadingEl.present();
              const data = resultData.data.bookingData;
              this.bookingsService
                .addBooking(
                  this.place.id,
                  this.place.title,
                  this.place.imageUrl,
                  data.firstName,
                  data.lastName,
                  data.guestNumber,
                  data.startDate,
                  data.endDate
                )
                .subscribe(() => {
                  loadingEl.dismiss();
                });
            });
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
