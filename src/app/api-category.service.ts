import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from './DAO/DAO';
@Injectable({
  providedIn: 'root'
})
export class ApiCategoryService {
  constructor(private _http : HttpClient) { }
  getAllCategory():Observable<Array<Details>>{
    return this._http.get<Array<Details>>('https://reqres.in/api/users');
  }
  getdataByID(id : number):Observable<Array<Details>>{
    return this._http.get<Array<Details>>('https://reqres.in/api/users' + "/" + id);
  } 

  insertData(form : object){
    return this._http.post('https://reqres.in/api/users', form);
  }

  updateData(form : object, id : number){
    return this._http.put('https://reqres.in/api/users',form, id);
  }

  deleteData(id : number){
    console.log(id);
    return this._http.delete('https://reqres.in/api/users', id);
  }
}

