import { Component, ViewChild ,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AdminhalladdeditcmpComponent } from '../adminhalladdeditcmp/adminhalladdeditcmp.component';
import { AdminmaindashboardComponent } from '../adminmaindashboard/adminmaindashboard.component';
import { PartyhallservService } from '../services/partyhallserv.service';

@Component({
  selector: 'app-adminwithhall',
  templateUrl: './adminwithhall.component.html',
  styleUrl: './adminwithhall.component.css'
})
export class AdminwithhallComponent implements OnInit {
  displayedColumns: string[] = [
    'hallId',
    'hallName',
    'hallCapacity',
    'hallAc',
    'diningCapacity',
    'diningType',
    'hallChargeperday',
    'hallImage',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _dialog: MatDialog,
    private _partyhallservService: PartyhallservService,
    private _adminmaindashboardComponent: AdminmaindashboardComponent
  ) { }

  ngOnInit(): void {
    this.getAllHallList();
  }

  openAddEditHallForm() {
    const dialogRef = this._dialog.open(AdminhalladdeditcmpComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllHallList();
        }
      },
    });
  }

  getAllHallList() {
    this._partyhallservService.getAllHallList().subscribe({
      next: (res) => {
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

  deleteHall(id: number) {
    this._partyhallservService.deleteHall(id).subscribe({
      next: (res) => {
        this._adminmaindashboardComponent.openSnackBar('Employee deleted!', 'done');
        this.getAllHallList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AdminhalladdeditcmpComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllHallList();
        }
      },
    });
  }
}



