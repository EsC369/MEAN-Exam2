import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // editProduct: {name: '', qTY: '', price: ''};
  product: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  editProduct: {name: '', qTY: '', price: ''};
  productInfo = {name: '', qTY: '', price: ""};
  errors = [];
  ngOnInit() {
    this.getOneProduct();
  }
  onEdit(product){
    let edit = this._httpService.edit_product(product._id, this.editProduct);
    edit.subscribe(data => {
      console.log(data);
      if(data['message'] == 'success'){
        this.errors.push(data['message']);
        // return this._router.navigate(['/']);
        this._router.navigate(["/"]);
      }else if(data['message'] != 'success') {
        if(data['errors'].errors.name){
          this.errors.push(data['errors'].errors.name.message);
        }
        if(data['errors'].errors.qTY){
          this.errors.push(data['errors'].errors.qTY.message);
        }
        if(data['errors'].errors.price){
          this.errors.push(data['errors'].errors.price.message);
        }
      }
      // this._router.navigate(['/products/' + product._id]);
    })
    // this._router.navigate(["/"]);
  }
  getOneProduct(){
    this._route.params.subscribe((params: Params) => {
      let product = this._httpService.show_product(params['id']);
      product.subscribe(data => {
        console.log(data);
        this.product = data['data'][0];
        this.editProduct = {name: data['data'][0].name, qTY: data['data'][0].qTY, price: data['data'][0].price};
      })
    })
  }
}
