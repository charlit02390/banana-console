import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from '../../models/team';
import { User } from '../../models/user';

@Component({
  selector: 'app-team-mant',
  templateUrl: './team-mant.component.html',
  styleUrls: ['./team-mant.component.css']
})
export class TeamMantComponent implements OnInit {
    @Output() addTeam = new EventEmitter<any>();
    @Output() editTeam = new EventEmitter<any>();
    @Output() revertTeam = new EventEmitter<any>();
    public teamForm: FormGroup;
    @Input('selectedTeam') team: Team = new Team();
    @Input() users: User[];
   
    @Input() isCollapsed:boolean;
    public submitted: boolean = false;
    public isEditing: boolean = false;


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.createForm();
    }
    createForm(){
        this.teamForm = this.formBuilder.group({
            idteams: 0,
            name: ['', Validators.required],
            members:['']
        });
    }

    onSubmit() {
        
        if(this.isEditing){
            this.editTeam.emit({team:this.teamForm.value,form:this.teamForm});
            this.isEditing = false;
        } else {
            this.addTeam.emit({team:this.teamForm.value,form:this.teamForm});
        }
        this.submitted = true; 
    }

    ngOnChanges(changes){
        if(changes.team && changes.team.currentValue){
            this.teamForm.setValue(changes.team.currentValue);
            this.isEditing = true;
        }
    }

    revert(){
        console.log('Entro');
        this.teamForm.reset();
        this.submitted = false;
        this.isEditing = false;
        this.revertTeam.emit(true);
    }

}