import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team-display',
  templateUrl: './team-display.component.html',
  styleUrls: ['./team-display.component.css']
})
export class TeamDisplayComponent implements OnInit {
    public displayedColumns;
    @Input() data;
    @Output() editRow = new EventEmitter<any>();
    @Output() deleteRow = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
      this.displayedColumns = ['teamName','actions'];
  }

  edit(data: any){
      this.editRow.emit(data);
  }

  delete(data:any){
      this.deleteRow.emit(data);
  }
  

}
