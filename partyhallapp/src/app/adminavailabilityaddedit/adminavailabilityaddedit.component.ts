
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartyhallservService } from '../services/partyhallserv.service';
import { AdminmaindashboardComponent } from '../adminmaindashboard/adminmaindashboard.component';
import { AvailservService } from '../services/availserv.service';
@Component({
  selector: 'app-adminavailabilityaddedit',
  templateUrl: './adminavailabilityaddedit.component.html',
  styleUrl: './adminavailabilityaddedit.component.css'
})
export class AdminavailabilityaddeditComponent implements OnInit {
  availForm: FormGroup;
  availstat: string[] = [
    'BOOKED',
    'AVAILABLE',
    'MAINTENENCE',
  ];
  constructor(
    private _fb: FormBuilder,
    private _availservService: AvailservService,
    private _dialogRef: MatDialogRef<AdminavailabilityaddeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _adminmaindashboardComponent: AdminmaindashboardComponent
  ) {
    this.availForm = this._fb.group({
      availId: '',
      availabilityDateTime: '',
      availableStatus: '',
      hallId: ''
    });
  }

  ngOnInit(): void {
    this.availForm.patchValue(this.data);
  }


  onFormSubmit() {
    if (this.availForm.valid) {
      if (this.data) {
        this._availservService
          .updateAvail(this.data.id, this.availForm.value)
          .subscribe({
            next: (val: any) => {
              this._adminmaindashboardComponent.openSnackBar('Hall Availablity detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._availservService
          .addAvail(this.availForm.value)
          .subscribe({
            next: (val: any) => {
              this._adminmaindashboardComponent.openSnackBar('Availablity Information added successfully');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      }
    }

  }

}