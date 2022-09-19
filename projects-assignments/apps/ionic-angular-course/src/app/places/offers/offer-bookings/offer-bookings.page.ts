import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  onNavigateBack() {
    this.navController.navigateBack('/places/tabs/offers');
  }
}
