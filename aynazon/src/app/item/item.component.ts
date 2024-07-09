import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  itemDetails: any[] = [];

  constructor(private _backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.listItems();
  }
  addItem() {
    this.router.navigate(['/additem']);
  }

  listItems() {
    this._backendService.getItemsList().subscribe(
      (data: any) => {
        this.itemDetails = data;
        console.log(data);
      
      },
      error => {
        console.error('Error fetching product details:', error);
      }
    );
  }
}
