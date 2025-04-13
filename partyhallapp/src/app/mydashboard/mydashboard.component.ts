import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CustomerservService } from '../services/customerserv.service'
import { BookingservService } from '../services/bookingserv.service'
import { MyBooking } from '../model/MyBooking';
@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})

export class MydashboardComponent implements OnInit {

  constructor(private router: Router, private _customerservService: CustomerservService,
    private _bookingservService: BookingservService) { }

  myBooking: MyBooking[] = [];
  showUpdateForm: boolean = false;
  selectedBooking: any
  user: any = {}
  editing: boolean = false;
  ngOnInit(): void {

    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
      console.log("From Mydashboard comp", this.user);
    }
    this.fetchBookings(this.user.custId);
  }

  fetchBookings(id: number) {
    this._bookingservService.getBookingbyCustid(id).subscribe(
      myBooking => {
        if (myBooking) {
          this.myBooking = myBooking;
          console.log('My Booking:', myBooking);
        } else {
          console.log('No bookings found for customer ID:', id);
          // Handle no bookings found case here, e.g., show a message to the user
        }
      },
      error => {
        if (error.status === 204) {
          console.log('No content found');
          // Handle no content case here, e.g., show a message to the user
        } else {
          console.error('Error fetching bookings:', error);
          // Handle other errors here
        }
      }
    );
  }
  

  cancelReq() {
    window.alert('No Refund policy. Please contact Hall Management further');

  }
  loggingOut() {
    window.sessionStorage.clear();
    window.alert(" Bye")
    this.router.navigate(['home']);
  }


  editMe() {
    this.editing = true;

  }

  cancelEditing() {
    this.editing = false;
    // Reset form values if needed
  }

  saveChanges() {
    // Save changes to the backend or perform necessary actions
    this._customerservService.updateCust(this.user.custId, this.user).subscribe(
      (updatedUser) => {
        // Update the user object with the changes received from the server
        this.user = updatedUser;
        // Exit editing mode
        this.editing = false;
      },
      (error) => {
        // Handle error
        console.error('Failed to update user:', error);
        // Optionally, you can keep the user in editing mode to allow retrying
      }
    );


  }
  editBooking(booking: any) {
    // Set the selected booking
    this.selectedBooking = booking;
    // Show the update form
    this.showUpdateForm = true;
  }
  updateBooking(booking: any) {
    // Handle update booking request
  }
  cancelBooking(bookingId: number) {
    // Handle cancellation request
  }
}


