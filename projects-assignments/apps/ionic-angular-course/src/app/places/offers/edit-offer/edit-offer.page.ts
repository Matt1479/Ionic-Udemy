import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;
  editOfferForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (!params.placeId) {
        this.navController.navigateBack('/places/tabs/offers');
      }
      this.place = this.placesService.getPlace(params.placeId);

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
  }

  onUpdateOffer() {
    if (!this.editOfferForm) {
      return;
    }
    console.log(this.editOfferForm);
  }
}
