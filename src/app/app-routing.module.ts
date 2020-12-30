import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DemoComponent } from './demo/demo.component'
import { DetailDataComponent } from './detail-data/detail-data.component';

const routes: Routes = [
  {path : 'data' , component:DemoComponent},
  {path : 'data/add' , component:AddEditComponent},
  {path : 'data/edit/:id' , component:AddEditComponent},
  {path : 'data/:id' , component:DetailDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
