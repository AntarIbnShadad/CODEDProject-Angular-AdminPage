import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from '../../data/users';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() toTable: any = []
  @Input() columns:number = 0 // if -1 will show all headers
  tableHeaders: string[]  = []

  constructor() {
    this.toTable = USERS
    this.tableHeaders = Object.keys(this.toTable[0]).map(header => header.toString())
  }
  log(toLog:any){
    console.log(toLog)
  }
}
