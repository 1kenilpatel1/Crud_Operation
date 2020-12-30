import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCategoryService } from '../api-category.service';
import { Details } from '../DAO/DAO';

@Component({
  selector: 'app-detail-data',
  templateUrl: './detail-data.component.html',
  styleUrls: ['./detail-data.component.css']
})
export class DetailDataComponent implements OnInit {
  details : Details[] = [];
  constructor(private _route: ActivatedRoute, private _api: ApiCategoryService, private _aroute: Router) { }
  ngOnInit(): void {
    var id = this._route.snapshot.paramMap.get('id');
    this._api.getdataByID(id).subscribe(
      (response : any) => this.details = response.data

    );
  }

  dataDelete(did : number) {
    this._api.deleteData(did).subscribe(
      (res)=> this._aroute.navigate(['../../data'])
    )
  }


}
