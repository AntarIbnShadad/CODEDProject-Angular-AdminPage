import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { PopupComponent } from '../../popup/popup.component';
import { NavbaarComponent } from '../navbaar/navbaar.component';
import { USERS } from '../../data/users';
import { PRODUCTS } from '../../data/products';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent,PopupComponent,NavbaarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  currentTab: string = 'users';
  UserList = USERS
  ProductList = PRODUCTS

  setTab(tab: string): void {
    this.currentTab = tab;
  }
}
