/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingsService {
  private _bookings: Booking[] = [
    {
      id: '0',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: '0',
    },
  ];

  get bookings() {
    return [...this._bookings];
  }
}
