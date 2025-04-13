import { Component, ViewChild ,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AdminmaindashboardComponent } from '../adminmaindashboard/adminmaindashboard.component';
import { AvailservService } from '../services/availserv.service';
import { AdminavailabilityaddeditComponent } from '../adminavailabilityaddedit/adminavailabilityaddedit.component';

@Component({
  selector: 'app-adminwithavailability',
  templateUrl: './adminwithavailability.component.html',
  styleUrl: './adminwithavailability.component.css'
})
export class AdminwithavailabilityComponent implements OnInit {

  
  displayedColumns: string[] = [
    'availId',
    'availabilityDateTime',
    'availableStatus',
    'partyhall',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _availservService: AvailservService,
    private _adminmaindashboardComponent: AdminmaindashboardComponent
  ) { 
   
  }

  openAddEditAForm(data: any) {
    const dialogRef = this._dialog.open(AdminavailabilityaddeditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllAvailList();
        }
      },
    });
  }


  ngOnInit(): void {
    this.getAllAvailList();
  }
  
    
  openAddEditAvailForm(){
    const dialogRef = this._dialog.open(AdminavailabilityaddeditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllAvailList();
        }
      },
    });

  }
  

  getAllAvailList() {

    this._availservService.getAllAvailList().subscribe({
      next: (res) => {
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

  deleteAvail(id: number) {
    console.log('At Component level',id);
    this._availservService.deleteAvail(id).subscribe({
      next: (res) => {
        console.log('At component back response',res)
        this._adminmaindashboardComponent.openSnackBar('Availability  deleted!', 'done');
        this.getAllAvailList();
      },
      error: console.log,
    });
  }
}

