import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Farm } from '../../models/farm';

@Component({
  selector: 'app-farm-mant',
  templateUrl: './farm-mant.component.html',
  styleUrls: ['./farm-mant.component.css']
})
export class FarmMantComponent implements OnInit {

  @Output() addFarm = new EventEmitter<any>();
    @Output() editFarm = new EventEmitter<any>();
    @Output() revertFarm = new EventEmitter<any>();
    public farmForm: FormGroup;
    @Input('selectedFarm') farm: Farm = new Farm();
    @Input() isCollapsed:boolean;
    public submitted: boolean = false;
    public isEditing: boolean = false;


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.createForm();
    }
    createForm(){
        this.farmForm = this.formBuilder.group({
            idfarms: 0,
            name: ['', Validators.required],
            address: ['',Validators.required]
        });
    }

    onSubmit() {
        if(this.isEditing){
            this.editFarm.emit({farm:this.farmForm.value,form:this.farmForm});
            this.isEditing = false;
        } else {
            this.addFarm.emit({farm:this.farmForm.value,form:this.farmForm});
        }
        this.submitted = true; 
    }

    ngOnChanges(changes){
        if(changes.farm && changes.farm.currentValue){
            this.farmForm.setValue(changes.farm.currentValue);
            this.isEditing = true;
        }
    }

    revert(){
        console.log('Entro');
        this.farmForm.reset();
        this.submitted = false;
        this.isEditing = false;
        this.revertFarm.emit(true);
    }

}
