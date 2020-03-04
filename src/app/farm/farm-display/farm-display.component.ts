import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Farm } from '../../models/farm';

@Component({
  selector: 'app-farm-display',
  templateUrl: './farm-display.component.html',
  styleUrls: ['./farm-display.component.css']
})
export class FarmDisplayComponent implements OnInit {

    public displayedColumns;
    @Input() data;
    @Output() editRow = new EventEmitter<any>();
    @Output() deleteRow = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
      this.displayedColumns = ['name', 'address','actions'];
  }

  edit(data: any){
      this.editRow.emit(data);
  }

  delete(data:any){
      this.deleteRow.emit(data);
  }

}
