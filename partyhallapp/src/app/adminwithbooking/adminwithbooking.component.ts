import { Component,ViewChild,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { BookingservService } from '../services/bookingserv.service';
import { AdminmaindashboardComponent } from '../adminmaindashboard/adminmaindashboard.component';
@Component({
  selector: 'app-adminwithbooking',
  templateUrl: './adminwithbooking.component.html',
  styleUrl: './adminwithbooking.component.css'
})
export class AdminwithbookingComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
    private _bookingservService: BookingservService,
    private _adminmaindashboardComponent: AdminmaindashboardComponent
  ) { }

  ngOnInit(): void {
    this.getAllBookings();
  }
  displayedColumns: string[] = [
    'bookingId',
    'avail',
    'customer',
    'fromDate',
    'toDate',
    'expectedTotalGuest',
    'dateOfBooking',   
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 

  getAllBookings() {
    this._bookingservService.getAllBookings().subscribe({
      next: (res) => {
        console.log('Received data from Spring Boot:', res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteBooking(id: number) {
    this._bookingservService.deleteBookings(id).subscribe({
      next: (res) => {
        this._adminmaindashboardComponent.openSnackBar('Customer Deleted deleted!', 'done');
        this.getAllBookings();
      },
      error: console.log,
    });
  }
}
 {

}
