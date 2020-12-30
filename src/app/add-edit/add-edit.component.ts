import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCategoryService } from '../api-category.service';
import { Details } from '../DAO/DAO';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  id: number = this._activatedRouter.snapshot.paramMap.get('id');
  data : Details[] = [];
  editData = [];
  constructor(private _api: ApiCategoryService, private _route: Router, private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._api.getdataByID(this.id).subscribe(
       (res : any) => this.data = res.data
    )
  }

  addStudent(form : object) {
    if (this.id === null) {
      console.log(form);
      this._api.insertData(form).subscribe(
        (res) => this._route.navigate(['../../data'])
      )
    }
    else{
      this._api.updateData(form, this.id).subscribe(
         (res)=> this._route.navigate(['../../data'])
      )
    }
  }

  

}
