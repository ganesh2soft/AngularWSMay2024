import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Staff } from 'src/app/staff';
import { StaffService } from 'src/app/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
user=new Staff();
  constructor(private staffService: StaffService, private router: Router ) { }
  ngOnInit() {

  }
  signupform = new FormGroup({
    joineeName: new FormControl('', [Validators.required,
    Validators.minLength(3), Validators.pattern('[a-z,A-Z].*')]),
    joineeemail: new FormControl('', [Validators.required, Validators.email]),
    joineepassword: new FormControl(''),
    confepassword: new FormControl('',),
    joineegender: new FormControl('', [Validators.required])
  });

  registerSubmitted() {

    if (this.Joineepassword.value == this.Confepassword.value) {
      console.log('Form status is',this.signupform.valid);
      console.log('Form info here ',this.signupform);
      this.Confepassword.setValue('none');
      this.user.joineeName=this.JoineeName.value;
      this.user.joineeemail=this.Joineeemail.value;
      this.user.joineepassword=this.Joineegender.value;
      this.user.joineegender=this.Joineegender.value;
         

      this.staffService.registerUser(this.user
        ).subscribe(res => {
          alert("You have been registered succcessfully");
          this.router.navigate(['/login']);
        console.log("From Profile",res);
      })
    } else {
      this.Confepassword.setValue('inline');
    }
  }
  get JoineeName(): FormControl {
    return this.signupform.get('joineeName') as FormControl
  }
  get Joineeemail(): FormControl {
    return this.signupform.get('joineeemail') as FormControl
  }

  get Joineepassword(): FormControl {
    return this.signupform.get('joineepassword') as FormControl
  }

  get Confepassword(): FormControl {
    return this.signupform.get('confepassword') as FormControl
  }
  get Joineegender(): FormControl {
    return this.signupform.get('joineegender') as FormControl
  }

}
