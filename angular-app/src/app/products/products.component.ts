import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  products = [];
  errors = [];

  ngOnInit() {
    this.get_products();
  }
  get_products(){
    let products = this._httpService.all_products();
    products.subscribe(data => {
      // if(data['message'] == 'success'){
      //   this.errors.push(data['message']);

      console.log(data);
      this.products = data['data'];
    })
  }
  goShowProduct(product){
    this._router.navigate(['/products/' + product._id]);
  }
  goEditProduct(product){
    this._router.navigate(['/products/' + product._id + '/edit'])
  }
}
