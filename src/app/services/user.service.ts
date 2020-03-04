import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../services/data.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataService:DataService) { }

  public getUsers(){
      return this.dataService.get('/api/users');
  }

  public getRoles(){
      return this.dataService.get('/api/static/roles');
  }

  public addUser(user:User){
    return this.dataService.post('/api/users',{'user':user});

  }
  public removeUser(user:User){
      return this.dataService.delete('/api/users/'+user.idusers);
  }
  public editUser(user:User){
      return this.dataService.put('/api/users/',{'user':user});
  }
}
