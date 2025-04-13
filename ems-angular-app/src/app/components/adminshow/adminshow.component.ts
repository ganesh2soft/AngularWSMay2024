import { Component ,OnInit} from '@angular/core';
import { Staff } from 'src/app/staff';
import { StaffService } from 'src/app/staff.service';
@Component({
  selector: 'app-adminshow',
  templateUrl: './adminshow.component.html',
  styleUrls: ['./adminshow.component.css']
})
export class AdminshowComponent implements OnInit {

staffs?: Staff[];

constructor(private staffService: StaffService) {
}
ngOnInit()
{
 
  this.staffService.findAll().subscribe(data => {
    this.staffs = data;
  });
  
}
}







