import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistrictListComponent } from './district-list/district-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'centrica-sales-web';
}
