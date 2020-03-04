import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-mant',
  templateUrl: './user-mant.component.html',
  styleUrls: ['./user-mant.component.css']
})
export class UserMantComponent implements OnInit {
    @Output() addUser = new EventEmitter<any>();
    @Output() editUser = new EventEmitter<any>();
    @Output() revertUser = new EventEmitter<any>();
    public userForm: FormGroup;
    @Input('selectedUser') user: User = new User();
    @Input() roles: any;
    public nationalities = [{'id':1,'name':'Costarricense'},{'id':2,'name':'Nicaragüense'}]
    @Input() isCollapsed:boolean;
    public submitted: boolean = false;
    public isEditing: boolean = false;


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.createForm();
    }
    createForm(){
        this.userForm = this.formBuilder.group({
            idusers: 0,
            username: ['', Validators.required],
            password: ['',Validators.required],
            name: [''],
            lastname: [''],
            email: ['', Validators.required],
            idrole: [0],
            dni:[''],
            nationality:[0],
            phone:['']
        });
    }

    onSubmit() {
        if(this.isEditing){
            this.editUser.emit({user:this.userForm.value,form:this.userForm});
            this.isEditing = false;
        } else {
            this.addUser.emit({user:this.userForm.value,form:this.userForm});
        }
        this.submitted = true; 
    }

    ngOnChanges(changes){
        if(changes.user && changes.user.currentValue){
            this.userForm.setValue(changes.user.currentValue);
            this.isEditing = true;
        }
    }

    revert(){
        console.log('Entro');
        this.userForm.reset();
        this.submitted = false;
        this.isEditing = false;
        this.revertUser.emit(true);
    }

}