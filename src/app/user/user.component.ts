import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/';
import { User } from '../models/user';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public roles;
    public institutions;
    public isCollapsed = true;
    public selectedUser : User = new User;
    public users: MatTableDataSource<User>


    constructor(private userService: UserService) { }

    ngOnInit() {
        this.getRoles();
        this.getUsers();

    }

    getRoles(){
        this.userService.getRoles().subscribe(data => {
            this.roles = data.roles;
          });
    }

    getUsers(){
        this.userService.getUsers().subscribe(data => {
            console.log(data.users);
            this.users = new MatTableDataSource<User>(data.users);
          });
    }

    

    addUser(user: any){ 
      console.log(user.user);
      delete user.user.idusers;
      this.userService.addUser(user.user)
        .then(data => {
          console.log('usuario agregado');
          user.form.reset();
          this.getUsers();
          this.OpenPanel();
        })
        .catch(error => {
          console.log(error);
          alert('El usuario seleccionado ya existe, por favor seleccione otro');
        });
    }

    updateUserSave(user:any){
      this.userService.editUser(user.user)
      .then(data => {
        user.form.reset();
        this.getUsers();
        this.OpenPanel();
      })
      .catch(error => {
        console.log('error',error);
      }); 
    }

    OpenPanel(){
      this.isCollapsed = !this.isCollapsed
    }

    updateUser(user: User){
      this.selectedUser =user;
      this.OpenPanel()
    }

    deleteUser(user: User){
      if(confirm("Desea Eliminar el Registro?")){
        this.userService.removeUser(user)
        .then(data => {
          this.getUsers();
        })
        .catch(error => {
          console.log('error',error);
        });     
      }
      
    }

    resetPage(value){
        this.isCollapsed = value;
    }

}
