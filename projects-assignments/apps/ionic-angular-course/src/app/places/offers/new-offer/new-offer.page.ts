import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { PlaceLocation } from '../../location.model';
import { PlacesService } from '../../places.service';

// only if you get Base64 data
function base64ToBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  newOfferForm: FormGroup;

  constructor(
    private placesService: PlacesService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.newOfferForm = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur', // blur / change / submit
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)],
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      location: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null),
    });
  }

  onLocationPicked(location: PlaceLocation) {
    this.newOfferForm.patchValue({
      location: location,
    });
  }

  onImagePicked(imageData: string | File) {
    // let imageFile;
    // NOTE: Run only if you get Base64 data
    // if (typeof imageData === 'string') {
    //   // if we get base64 string then...
    //   try {
    //     imageFile = base64ToBlob(
    //       imageData.replace('data:image/jpeg;base64', ''),
    //       'image/jpeg'
    //     );
    //   } catch (error) {
    //     // or throw an alert - conversion failed
    //     console.log(error);
    //     return;
    //   }
    // } else {
    //   // if we get file then...
    //   imageFile = imageData;
    // }
    this.newOfferForm.patchValue({ image: imageData });
  }

  onCreateOffer() {
    if (!this.newOfferForm.valid || !this.newOfferForm.get('image').value) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Creating place...',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.placesService
          // .uploadImage(this.newOfferForm.get('image').value)
          // .pipe(
          //   switchMap((uploadRes) => {
          .addPlace(
            this.newOfferForm.value.title,
            this.newOfferForm.value.description,
            +this.newOfferForm.value.price,
            new Date(this.newOfferForm.value.dateFrom),
            new Date(this.newOfferForm.value.dateTo),
            this.newOfferForm.value.location,
            // uploadRes.imageUrl
            'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'
            // );
            // })
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.newOfferForm.reset();
            this.router.navigate(['/places/tabs/offers']);
          });
      });
  }
}
