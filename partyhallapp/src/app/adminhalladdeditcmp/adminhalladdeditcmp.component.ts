import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartyhallservService } from '../services/partyhallserv.service';
import { AdminmaindashboardComponent } from '../adminmaindashboard/adminmaindashboard.component';
@Component({
  selector: 'app-adminhalladdeditcmp',
  templateUrl: './adminhalladdeditcmp.component.html',
  styleUrl: './adminhalladdeditcmp.component.css'
})
export class AdminhalladdeditcmpComponent implements OnInit {
  hallForm: FormGroup;
  ngOnInit(): void {
    this.hallForm.patchValue(this.data);
  }
  constructor(private http: HttpClient,
    private _fb: FormBuilder,
    private _partyhallservService: PartyhallservService,
    private _dialogRef: MatDialogRef<AdminhalladdeditcmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _adminmaindashboardComponent: AdminmaindashboardComponent
  ) {
    this.hallForm = this._fb.group({
      hallName: '',
      hallCapacity: '',
      hallAc: '',
      diningCapacity: '',
      diningType: '',
      hallChargeperday: '',
      hallImage: '',
     
    });
  }

  fileName='';
  onFileSelected(event: Event) {
    const fileInput = (event.target as HTMLInputElement)?.files?.[0];

    if (fileInput) {
        const file: File = fileInput;

        this.fileName = file.name;

        const formData = new FormData();
        formData.append("thumbnail", file);

        const upload$ = this.http.post("/api/thumbnail-upload", formData);
        upload$.subscribe();
    }
}

  onFormSubmit() {

    if (this.hallForm.valid) {
      if (this.data) {
        this._partyhallservService
          .updateHall(this.data.id, this.hallForm.value)
          .subscribe({
            next: (val: any) => {
              this._adminmaindashboardComponent.openSnackBar('Hall detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._partyhallservService
        .addHall(this.hallForm.value).subscribe({
          next: (val: any) => {
            this._adminmaindashboardComponent.openSnackBar('Hall Information added successfully');
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