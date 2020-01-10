import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../core/';
import { Employee } from '../models/employee'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    public roles;
    public isCollapsed = true;

    employees = [{
        idemployees:1,
        name:'Carlos',
        lastname:'Monge',
        role:'Alistador'
    },{
       idemployees:2,
        name:'Carlos',
        lastname:'Monge',
        role:'Alistador'
    },{
        idemployees:3,
        name:'Carlos',
        lastname:'Monge',
        role:'Alistador'
    }]

    userForm = this.fb.group({
        idEmployees: 0,
        name: [''],
        lastName: [''],
        idroles: [0],
    });
    public btnSubmitLabel;
    public btnFunctionLabel;

    public dataSource;
    public displayedColumns;
    public selection = new SelectionModel<Employee>(true,[]);

    constructor(private fb: FormBuilder, private dataService: DataService) { }

    getRoles(){
        this.dataService.get('api/static/roles')
            .then(response => {
                  this.roles = response.roles;
            });
    }

    getUsers(){
        this.dataSource = new MatTableDataSource<Employee>(this.employees);
    }

    ngOnInit() {
        //this.getRoles();
        this.getUsers();
        this.btnFunctionLabel = 'Agregar Empleado';
        this.btnSubmitLabel = 'Agregar';
        this.displayedColumns = ['select','name', 'role'];
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;

        return numSelected === numRows;
    }

    selectionChange(row){
        this.selection.toggle(row);
        console.log(this.selection.selected[0]);
        var selectionCount = this.selection.selected.length;
        if(selectionCount > 0){
            this.userForm.setValue({
                idEmployees: this.selection.selected[0].idemployees,
                name: this.selection.selected[0].name,
                lastName: this.selection.selected[0].lastname,
                idroles: this.selection.selected[0].role,
            });
            this.btnFunctionLabel = 'Modificar Empleado';
            this.btnSubmitLabel = 'Modificar';

        }
        else {
            this.resetPage();
        }
        
    }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.resetPage() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    addUser(){
        this.dataService.post('api/users', { user: this.userForm.value })
            .then(response => {
                this.resetPage()
        });
    }

    updateUser(){
        this.dataService.put('api/users', { user: this.userForm.value })
            .then(response => {
                this.resetPage();
        });
    }

    deleteUsers(){
            this.dataService.delete('api/users',{ users: this.selection.selected })
            .then(response => {
                this.resetPage();
            });
    }

    resetPage(){
        this.btnFunctionLabel = 'Agregar Empleado';
        this.btnSubmitLabel = 'Agregar';
        this.selection.clear();
        this.getUsers();
        this.userForm.reset();
        this.isCollapsed = true;
    }

    btnAction(){
        if(this.selection.selected.length === 0){
            this.addUser();
        }
        else {
            this.updateUser();
        }
    }



}
