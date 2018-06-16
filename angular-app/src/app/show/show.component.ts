import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  product: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getOneProduct();
  }
  getOneProduct(){
    this._route.params.subscribe((params: Params) => {
      let product = this._httpService.show_product(params['id']);
      product.subscribe(data => {
        console.log(data);
        this.product = data['data'][0];
      })
    })
  }

  onDestroy(product){
    let destroy = this._httpService.destroy_product(product._id);
    destroy.subscribe(data => {
      console.log(data);
      this._router.navigate(['/products']);
    })
  }
}
