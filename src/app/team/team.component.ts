import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/';
import { UserService } from '../services';
import { Team } from '../models/team';
import { User } from '../models/user';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    public users: User[];
    public institutions;
    public isCollapsed = true;
    public selectedTeam : Team = new Team;
    public teams: MatTableDataSource<Team>


    constructor(private teamService: TeamService, private userService: UserService) { }

    ngOnInit() {
        this.getUsers();
        this.getTeams();

    }

    getUsers(){
        this.userService.getUsers().subscribe(data => {
            this.users = data.users;
          });
    }

    getTeams(){
        this.teamService.getTeams().subscribe(data => {
            console.log(data.teams);
            this.teams = new MatTableDataSource<Team>(data.teams);
          });
    }

    

    addTeam(team: any){ 
      console.log(team.team);
      delete team.team.idteams;
      this.teamService.addTeam(team.team)
        .then(data => {
          console.log('usuario agregado');
          team.form.reset();
          this.getTeams();
          this.OpenPanel();
        })
        .catch(error => {
          console.log(error);
          alert('El team seleccionado ya existe, por favor seleccione otro');
        });
    }

    updateTeamSave(team:any){
      this.teamService.editTeam(team.team)
      .then(data => {
        team.form.reset();
        this.getTeams();
        this.OpenPanel();
      })
      .catch(error => {
        console.log('error',error);
      }); 
    }

    OpenPanel(){
      this.isCollapsed = !this.isCollapsed
    }

    updateTeam(team: Team){
      this.selectedTeam =team;
      this.OpenPanel()
    }

    deleteTeam(team: Team){
      if(confirm("Desea Eliminar el Registro?")){
        this.teamService.removeTeam(team)
        .then(data => {
          this.getTeams();
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
