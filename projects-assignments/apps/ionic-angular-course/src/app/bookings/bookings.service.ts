/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Booking } from './booking.model';

interface BookingData {
  placeId: string;
  bookedFrom: string;
  bookedTo: string;
  firstName: string;
  guestNumber: number;
  lastName: string;
  placeImage: string;
  placeTitle: string;
  userId: string;
}

@Injectable({ providedIn: 'root' })
export class BookingsService {
  private _bookings = new BehaviorSubject<Booking[]>([]);

  get bookings() {
    return this._bookings.asObservable();
  }

  constructor(private authService: AuthService, private http: HttpClient) {}

  addBooking(
    placeId: string,
    placeTitle: string,
    placeImage: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    let generatedId: string;
    const newBooking = new Booking(
      Math.random().toString(),
      placeId,
      this.authService.userId,
      placeTitle,
      placeImage,
      firstName,
      lastName,
      guestNumber,
      dateFrom,
      dateTo
    );

    return this.http
      .post<{ name: string }>(environment.firebaseAPIUrl + 'bookings.json', {
        ...newBooking,
        id: null,
      })
      .pipe(
        switchMap((resData) => {
          generatedId = resData.name;
          return this.bookings;
        }),
        take(1),
        tap((bookings) => {
          newBooking.id = generatedId;
          this._bookings.next(bookings.concat(newBooking));
        })
      );
  }

  cancelBooking(bookingId: string) {
    return this.http
      .delete(environment.firebaseAPIUrl + `bookings/${bookingId}.json`)
      .pipe(
        switchMap(() => {
          // return current list of bookings (locally)
          return this.bookings;
        }),
        // take 1 snapshot and complete
        take(1),
        tap((bookings) => {
          // emit a new list of bookings
          // where I filter out the booking that I want to delete
          // if id doesn't match - keep
          // if id matches - discard
          this._bookings.next(bookings.filter((b) => b.id !== bookingId));
        })
      );
  }

  fetchBookings() {
    return this.http
      .get<{ [key: string]: BookingData }>(
        // orderBy="userId"
        // equalTo="${this.authService.userId}"
        environment.firebaseAPIUrl +
          `bookings.json?orderBy="userId"&equalTo="${this.authService.userId}"`
      )
      .pipe(
        map((bookingData) => {
          const bookings = [];
          for (const key in bookingData) {
            if (bookingData.hasOwnProperty(key)) {
              bookings.push(
                new Booking(
                  key,
                  bookingData[key].placeId,
                  bookingData[key].userId,
                  bookingData[key].placeTitle,
                  bookingData[key].placeImage,
                  bookingData[key].firstName,
                  bookingData[key].lastName,
                  bookingData[key].guestNumber,
                  new Date(bookingData[key].bookedFrom),
                  new Date(bookingData[key].bookedTo)
                )
              );
            }
          }
          return bookings;
        }),
        tap((bookings) => {
          this._bookings.next(bookings);
        })
      );
  }
}
