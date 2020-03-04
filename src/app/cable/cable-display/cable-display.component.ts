import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Cable } from '../../models/cable';

@Component({
  selector: 'app-cable-display',
  templateUrl: './cable-display.component.html',
  styleUrls: ['./cable-display.component.css']
})
export class CableDisplayComponent implements OnInit {
    public displayedColumns;
    @Input() data;
    @Output() editRow = new EventEmitter<any>();
    @Output() deleteRow = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
      this.displayedColumns = ['value', 'description', 'block','actions'];
  }

  edit(data: any){
      this.editRow.emit(data);
  }

  delete(data:any){
      this.deleteRow.emit(data);
  }
  

}
