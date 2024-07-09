import { Component, OnInit } from '@angular/core';
import { ProdsrvService } from '../prodsrv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrl: './prodlist.component.css'
})
export class ProdlistComponent implements OnInit {

  products: any = [];
  
  constructor(private prodsrvService: ProdsrvService, private router: Router) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.prodsrvService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }
  onCart(disProduct:{}) {
    

   window.sessionStorage.setItem("proddetails", JSON.stringify(disProduct));
    this.router.navigate(['/orderpage']);
  }
}
