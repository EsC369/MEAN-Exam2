import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  all_products(){
    return this._http.get('/index');
  }

  add_product(addProduct){
    return this._http.post('/create', addProduct);
  }

  show_product(id){
    return this._http.get('/show/' + id);
  }

  edit_product(id, editProduct){
    return this._http.put('/edit/' + id, editProduct);
  }

  destroy_product(id){
    return this._http.delete('/destroy/' + id);
  }

}
