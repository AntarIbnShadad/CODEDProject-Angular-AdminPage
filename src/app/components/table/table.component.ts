import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { USERS } from '../../data/users';
import { RowPipePipe } from '../../pipes/row-pipe.pipe';
import { PopupComponent } from '../../popup/popup.component';
import { PRODUCTS , Product} from '../../data/products';
import { HeaderPipe } from '../../header.pipe';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RowPipePipe, PopupComponent, HeaderPipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() toTable: any = [];
  tableHeaders: string[] = [];
  showPopup = false; 

  constructor() {
    this.toTable = USERS;
    this.tableHeaders = Object.keys(this.toTable[0]).map(header => header.toString());
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toTable'] && this.toTable && this.toTable.length > 0) {
      console.log('Input changed:', this.toTable);
      this.tableHeaders = Object.keys(this.toTable[0]);
    }
  }

  openPopup() {
    this.showPopup = true; 
  }

  close() {
    this.showPopup = false; 
  }

  log(toLog:any){
    console.log(toLog);
  }
}