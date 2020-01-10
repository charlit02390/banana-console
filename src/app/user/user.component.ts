import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../core/';
import { User } from '../models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public roles;
    public institutions;
    public isCollapsed = true;

    users = [{
        idusers:1,
        username: 'cmonge',
        email:'charlit02390@gmail.com',
        name:'Carlos',
        lastname:'Monge',
        role:'Asignador',
        password:'1234'
    },{
       idusers:2,
        username: 'mario',
        email:'mario23@gmail.com',
        name:'Mario',
        lastname:'Arias',
        role:'Receptor',
        password:'1234'
    },{
        idusers:3,
        username: 'justin',
        email:'justin@gmail.com',
        name:'Justin',
        lastname:'Merlo',
        role:'Administrador',
        password:'1234'
    }]

    userForm = this.fb.group({
        idUsers: 0,
        userName: ['', Validators.required],
        password: ['',Validators.required],
        name: [''],
        lastName: [''],
        email: ['', Validators.required],
        idroles: [0],
    });
    public btnSubmitLabel;
    public btnFunctionLabel;

    public dataSource;
    public displayedColumns;
    public selection = new SelectionModel<User>(true,[]);

    constructor(private fb: FormBuilder, private dataService: DataService) { }

    getRoles(){
        this.dataService.get('api/static/roles')
            .then(response => {
                  this.roles = response.roles;
            });
    }

    getUsers(){
        this.dataSource = new MatTableDataSource<User>(this.users);
    }

    ngOnInit() {
        //this.getRoles();
        this.getUsers();
        this.btnFunctionLabel = 'Agregar Usuario';
        this.btnSubmitLabel = 'Agregar';
        this.displayedColumns = ['select','userName', 'email', 'role'];
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
                idUsers: this.selection.selected[0].idusers,
                userName: this.selection.selected[0].username,
                password: this.selection.selected[0].password,
                name: this.selection.selected[0].name,
                lastName: this.selection.selected[0].lastname,
                email: this.selection.selected[0].email,
                idroles: this.selection.selected[0].role,
            });
            this.btnFunctionLabel = 'Modificar Usuario';
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
        this.btnFunctionLabel = 'Agregar Usuario';
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
