import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  place: Place;
  editOfferForm: FormGroup;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private navController: NavController,
    private router: Router,
    private loadingCtrl: LoadingController
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

          this.editOfferForm = new FormGroup({
            title: new FormControl(this.place.title, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            description: new FormControl(this.place.description, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
          });
        });
    });
  }

  onUpdateOffer() {
    if (!this.editOfferForm) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Updating place...',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.placesService
          .updatePlace(
            this.place.id,
            this.editOfferForm.value.title,
            this.editOfferForm.value.description
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.editOfferForm.reset();
            this.router.navigate(['/places/tabs/offers']);
          });
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
