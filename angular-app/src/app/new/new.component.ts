import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  productInfo = {name: '', qTY: '', price: ""};
  errors = [];
  ngOnInit() {
  }
  
  onCreate(){
    let add_product = this._httpService.add_product(this.productInfo);
    add_product.subscribe(data => {
      console.log(data);
      if(data['message'] == 'success'){
        this.productInfo = {name: '', qTY: '', price: ''};
        this._router.navigate(['/']);
      }else{
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
    })
  }
}
