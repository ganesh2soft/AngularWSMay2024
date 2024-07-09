import { PartyHall } from './PartyHallModel';
import { Customer } from './CustomerModel';

export class Booking {
  bookingId: number;
  fromDate: Date;
  toDate: Date;
  expectedTotalGuest: number;
  dateOfBooking: Date;
  partyHall: PartyHall;
  customer: Customer;

  constructor(
    bookingId: number,
    fromDate: Date,
    toDate: Date,
    expectedTotalGuest: number,
    dateOfBooking: Date,
    partyHall: PartyHall,
    customer: Customer
  ) {
    this.bookingId = bookingId;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.expectedTotalGuest = expectedTotalGuest;
    this.dateOfBooking = dateOfBooking;
    this.partyHall = partyHall;
    this.customer = customer;
  }
}
