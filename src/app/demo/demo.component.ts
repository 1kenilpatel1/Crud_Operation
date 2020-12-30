import { Component, OnInit } from '@angular/core';
import { ApiCategoryService } from '../api-category.service';
import  { Router } from '@angular/router';
import { Details } from '../DAO/DAO';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private _Api: ApiCategoryService, private _route : Router) { }
  demo : Details[] = [];
  ngOnInit(): void {
    this._Api.getAllCategory().subscribe(
      (response : any) => this.demo = response.data
    );
  }

  detailData(id : number){
    this._route.navigate(['../data' , id]);
  }

}
