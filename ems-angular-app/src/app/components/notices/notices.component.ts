import { OnInit, Component } from '@angular/core';
import { StaffService } from 'src/app/staff.service';
@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  notices= new Array();

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {

    this.staffService.getNoticeDetails().subscribe(data => {
      this.notices = data;
    });

  }
}