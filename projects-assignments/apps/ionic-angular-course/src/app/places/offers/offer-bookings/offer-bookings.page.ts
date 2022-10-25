import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit, OnDestroy {
  place: Place;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (!params.placeId) {
        this.navController.navigateBack('/places/tabs/offers');
      }
      this.subscription = this.placesService
        .getPlace(params.placeId)
        .subscribe((place) => {
          this.place = place;
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
