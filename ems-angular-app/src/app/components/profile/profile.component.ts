import { Component,OnInit } from '@angular/core';
import { Staff } from 'src/app/staff';
import { StaffService } from 'src/app/staff.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  staffobj=new Staff();
  
  constructor(private staffService: StaffService) {
  }
  ngOnInit()
  {
   this.staffobj.joineeId=this.staffService.userstaff.joineeId;
   this.staffobj.joineeName=this.staffService.userstaff.joineeName;
   this.staffobj.joineegender=this.staffService.userstaff.joineegender;
   this.staffobj.joineeemail=this.staffService.userstaff.joineeemail;
   this.staffobj.roles=this.staffService.userstaff.roles;
   this.staffobj.dept=this.staffService.userstaff.dept;
   // this.staffService.findAll().subscribe(data => {
  //    this.staffs = data;
   // });
    
  }
  }
  
  
  
  
  
  
  
  
