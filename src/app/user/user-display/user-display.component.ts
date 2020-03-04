import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
    public displayedColumns;
    @Input() data;
    @Output() editRow = new EventEmitter<any>();
    @Output() deleteRow = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
      this.displayedColumns = ['userName', 'email', 'role','actions'];
  }

  edit(data: any){
      this.editRow.emit(data);
  }

  delete(data:any){
      this.deleteRow.emit(data);
  }
  

}
