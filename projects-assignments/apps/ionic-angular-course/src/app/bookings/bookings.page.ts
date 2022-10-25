import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Booking } from './booking.model';
import { BookingsService } from './bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {
  loadedBookings: Booking[];
  private subscription: Subscription;

  constructor(
    private bookingsService: BookingsService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.subscription = this.bookingsService.bookings.subscribe((bookings) => {
      this.loadedBookings = bookings;
    });
  }

  onCancelBooking(bookingId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.loadingCtrl
      .create({
        message: 'Cancelling...',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.bookingsService.cancelBooking(bookingId).subscribe(() => {
          loadingEl.dismiss();
        });
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
