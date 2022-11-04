import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, map, switchMap, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { PlaceLocation } from './location.model';
import { Place } from './place.model';

// [
//   new Place(
//     'p1',
//     'Manhattan Mansion',
//     'In the heart of New York City.',
//     'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
//     149.99,
//     new Date('2022-01-01'),
//     new Date('2022-12-31'),
//     'abc'
//   ),
//   new Place(
//     'p2',
//     // eslint-disable-next-line @typescript-eslint/quotes
//     "L'Amour Toujours",
//     'A romantic place in Paris.',
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
//     189.99,
//     new Date('2022-01-01'),
//     new Date('2022-12-31'),
//     'abc'
//   ),
//   new Place(
//     'p3',
//     'The Foggy Palace',
//     'Not your average city trip!',
//     'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
//     99.99,
//     new Date('2022-01-01'),
//     new Date('2022-12-31'),
//     'abc'
//   ),
// ]

interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
  location: PlaceLocation;
}

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([]);

  constructor(private authService: AuthService, private http: HttpClient) {}

  fetchPlaces() {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => {
        // [key: string]: PlaceData
        // any key which is a string which value is of type PlaceData
        return this.http.get<{ [key: string]: PlaceData }>(
          environment.firebaseAPIUrl + 'offered-places.json?auth=' + token
        );
      }),
      // map - get the response data and return new modified data
      // difference to switchMap - map returns a non-Observable data
      // switchMap returns an Observable
      map((resData) => {
        const places = [];
        // loop through all the keys...
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            // for each key push a new element to an array
            places.push(
              new Place(
                key,
                resData[key].title,
                resData[key].description,
                resData[key].imageUrl,
                resData[key].price,
                new Date(resData[key].availableFrom),
                new Date(resData[key].availableTo),
                resData[key].userId,
                resData[key].location
              )
            );
          }
        }
        return places;
        // return [];
      }),
      tap((places: Place[]) => {
        this._places.next(places);
      })
    );
  }

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return this._places.asObservable();
  }

  getPlace(id: string) {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => {
        return this.http.get<PlaceData>(
          environment.firebaseAPIUrl + `offered-places/${id}.json?auth=${token}`
        );
      }),
      map((resData) => {
        return new Place(
          id,
          resData.title,
          resData.description,
          resData.imageUrl,
          resData.price,
          new Date(resData.availableFrom),
          new Date(resData.availableTo),
          resData.userId,
          resData.location
        );
      })
    );
  }

  uploadImage(image: File) {
    const uploadData = new FormData();
    uploadData.append('image', image);

    return this.authService.token.pipe(
      take(1),
      switchMap((token) => {
        return this.http.post<{ imageUrl: string; imagePath: string }>(
          environment.firebaseStorageImageFunctionAPIUrl,
          uploadData,
          { headers: { Authorization: 'Bearer ' + token } }
        );
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date,
    location: PlaceLocation,
    imageUrl: string
  ) {
    let generatedId: string;
    let fetchedUserId: string;
    let newPlace: Place;
    return this.authService.userId.pipe(
      // get 1 userId - do not set up ongoing subscription
      take(1),
      switchMap((userId) => {
        fetchedUserId = userId;
        return this.authService.token;
      }),
      take(1),
      switchMap((token) => {
        if (!fetchedUserId) {
          throw new Error('No user found');
        }
        newPlace = new Place(
          Math.random().toString(),
          title,
          description,
          imageUrl,
          price,
          dateFrom,
          dateTo,
          fetchedUserId,
          location
        );

        return this.http.post<{ name: string }>(
          environment.firebaseAPIUrl + 'offered-places.json?auth=' + token,
          {
            ...newPlace,
            id: null,
          }
        );
      }),
      // switchMap takes the existing Observable chain
      // and result of that chain (resData)
      // then it returns a new Observable that replaces the old Observable
      switchMap((resData) => {
        // get the id from firebase
        generatedId = resData.name;
        return this.places;
      }),
      // take(1) place
      take(1),
      tap((places) => {
        // we're working with places array because of to switchMap
        newPlace.id = generatedId;
        this._places.next(places.concat(newPlace));
      })
    );

    // take(1) - (emit provided number of values, then complete) - emit current latest list of places, then complete
    // return this._places.pipe(
    //   take(1),
    //   delay(1000),
    //   tap((places: Place[]) => {
    //     // concat - takes the old array, adds a new element (merges two arrays), and returns a new array
    //     // then emit a new array with next
    //     this._places.next(places.concat(newPlace));
    //   })
    // );
  }

  updatePlace(placeId: string, title: string, description: string) {
    // create the variable so that we can use it in tap()
    let updatedPlaces: Place[];
    let fetchedToken;
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => {
        fetchedToken = token;
        return this.places;
      }),
      // take latest snapshot and complete
      take(1),
      // switch Observables (places -> http request)
      switchMap((places: Place[]) => {
        if (!places || places.length <= 0) {
          return this.fetchPlaces();
        } else {
          // of() takes any value and turns it into an Observable
          return of(places);
        }
      }),
      switchMap((places: Place[]) => {
        const updatedPlaceIndex = places.findIndex(
          (place) => place.id === placeId
        );
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId,
          oldPlace.location
        );
        return this.http.put(
          environment.firebaseAPIUrl +
            `offered-places/${placeId}.json?auth=${fetchedToken}`,
          { ...updatedPlaces[updatedPlaceIndex], id: null }
        );
      }),
      tap((resData) => {
        this._places.next(updatedPlaces);
      })
    );
  }
}
