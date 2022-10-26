import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';
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
  placeId: string;
  editOfferForm: FormGroup;
  isLoading = false;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private navController: NavController,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (!params.placeId) {
        this.navController.navigateBack('/places/tabs/offers');
        return;
      }
      this.placeId = params.placeId;
      this.isLoading = true;
      this.subscription = this.placesService
        .getPlace(params.placeId)
        .subscribe({
          next: (place) => {
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
            this.isLoading = false;
          },
          error: (error) => {
            this.alertCtrl
              .create({
                header: 'An error occurred!',
                message: 'Place could not be fetched. Please try again later.',
                buttons: [
                  {
                    text: 'Okay',
                    handler: () => {
                      this.router.navigate(['/places/tabs/offers']);
                    },
                  },
                ],
              })
              .then((alertEl) => {
                alertEl.present();
              });
          },
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
