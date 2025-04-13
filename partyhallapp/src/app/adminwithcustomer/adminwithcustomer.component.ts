import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from '../model/CustomerModel';
import { CustomerservService } from '../services/customerserv.service';
import { AdminmaindashboardComponent } from '../adminmaindashboard/adminmaindashboard.component';
@Component({
  selector: 'app-adminwithcustomer',
  templateUrl: './adminwithcustomer.component.html',
  styleUrl: './adminwithcustomer.component.css'
})
export class AdminwithcustomerComponent implements OnInit {

  displayedColumns: string[] = [

    
    'custId',
    'email',
    'firstName',
    'lastName',
    'phone',
    'address',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _customerservService: CustomerservService,
    private _adminmaindashboardComponent: AdminmaindashboardComponent
  ) { 
   
  }

  ngOnInit(): void {
    this.getAllCustomersList();
  }

  getAllCustomersList() {

    this._customerservService.getAllCustomers().subscribe({
      next: (res: Customer[]) => {
        console.log('Received data from Spring Boot:', res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCust(id: number) {
    this._customerservService.deleteCust(id).subscribe({
      next: (res) => {
        this._adminmaindashboardComponent.openSnackBar('Customer Deleted deleted!', 'done');
        this.getAllCustomersList();
      },
      error: console.log,
    });
  }
}
