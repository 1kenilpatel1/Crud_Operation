import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { CurrencyInrPipe } from './currency-inr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AddEditComponent,
    DetailDataComponent,
    CurrencyInrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
