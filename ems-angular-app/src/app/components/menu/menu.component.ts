import { Component } from '@angular/core';
import { Staff } from 'src/app/staff';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
staff=new Staff()
constructor(){

}
ngOnInit() {
  if(sessionStorage.getItem('userdetails')){
    this.staff = JSON.parse(sessionStorage.getItem('userdetails')!);
  }
}

}
