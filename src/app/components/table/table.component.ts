import { Component, Input } from '@angular/core';
import { USERS } from '../../data/users';
import { RowPipePipe } from '../../pipes/row-pipe.pipe';
import { PopupComponent } from '../../popup/popup.component';
import { PRODUCTS , Product} from '../../data/products';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RowPipePipe, PopupComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() toTable: any = [];
  tableHeaders: string[] = [];
  showPopup = false; // Used to toggle the popup

  constructor() {
    this.toTable = PRODUCTS;
    this.tableHeaders = Object.keys(this.toTable[0]).map(header => header.toString());
  }

  openPopup() {
    this.showPopup = true; // Show the popup
  }

  close() {
    this.showPopup = false; // Close the popup
  }

  log(toLog:any){
    console.log(toLog);
  }
}