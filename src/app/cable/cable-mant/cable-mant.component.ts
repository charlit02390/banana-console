import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Cable } from '../../models/cable';

@Component({
  selector: 'app-cable-mant',
  templateUrl: './cable-mant.component.html',
  styleUrls: ['./cable-mant.component.css']
})
export class CableMantComponent implements OnInit {
    @Output() addCable = new EventEmitter<any>();
    @Output() editCable = new EventEmitter<any>();
    @Output() revertCable = new EventEmitter<any>();
    public cableForm: FormGroup;
    @Input('selectedCable') cable: Cable = new Cable();
    @Input() blocks: any;
    @Input() isCollapsed:boolean;
    public submitted: boolean = false;
    public isEditing: boolean = false;


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.createForm();
    }
    createForm(){
        this.cableForm = this.formBuilder.group({
            idcables: 0,
            value: ['',Validators.required],
            description: [''],
            idblock:[0,Validators.required]
        });
    }

    onSubmit() {
        if(this.isEditing){
            this.editCable.emit({cable:this.cableForm.value,form:this.cableForm});
            this.isEditing = false;
        } else {
            this.addCable.emit({cable:this.cableForm.value,form:this.cableForm});
        }
        this.submitted = true; 
    }

    ngOnChanges(changes){
        if(changes.cable && changes.cable.currentValue){
            this.cableForm.setValue(changes.cable.currentValue);
            this.isEditing = true;
        }
    }

    revert(){
        console.log('Entro');
        this.cableForm.reset();
        this.submitted = false;
        this.isEditing = false;
        this.revertCable.emit(true);
    }

}