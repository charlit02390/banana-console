import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { DataService } from '../services/data.service';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private dataService:DataService) { }

  public getTeams(){
      return this.dataService.get('/api/teams');
  }

  public addTeam(team:Team){
    return this.dataService.post('/api/teams',{'team':team});

  }
  public removeTeam(team:Team){
      return this.dataService.delete('/api/teams/'+team.idteams);
  }
  
  public editTeam(team:Team){
      return this.dataService.put('/api/teams/',{'team':team});
  }
}
