import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Block } from '../../models/block';

@Component({
  selector: 'app-block-display',
  templateUrl: './block-display.component.html',
  styleUrls: ['./block-display.component.css']
})
export class BlockDisplayComponent implements OnInit {
    public displayedColumns;
    @Input() data;
    @Output() editRow = new EventEmitter<any>();
    @Output() deleteRow = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
      this.displayedColumns = ['name', 'description', 'farm', 'actions'];
  }

  edit(data: any){
      this.editRow.emit(data);
  }

  delete(data:any){
      this.deleteRow.emit(data);
  }
  

}
