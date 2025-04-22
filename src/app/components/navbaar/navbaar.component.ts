import { Component } from '@angular/core';

@Component({
  selector: 'app-navbaar',
  standalone: true,
  imports: [],
  templateUrl: './navbaar.component.html',
  styleUrl: './navbaar.component.css'
})
export class NavbaarComponent {
  loggedInUser = 'ADMIN';
}
