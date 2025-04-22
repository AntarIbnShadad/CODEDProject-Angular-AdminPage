import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { PopupComponent } from './popup/popup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableComponent, PopupComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adminPage';

  
}
