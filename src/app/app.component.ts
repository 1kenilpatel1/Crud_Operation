import { Component } from '@angular/core';
import { from } from 'rxjs';
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZomatoApi';
}
