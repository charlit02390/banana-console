import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Block } from '../../models/block';

@Component({
  selector: 'app-block-mant',
  templateUrl: './block-mant.component.html',
  styleUrls: ['./block-mant.component.css']
})
export class BlockMantComponent implements OnInit {
    @Output() addBlock = new EventEmitter<any>();
    @Output() editBlock = new EventEmitter<any>();
    @Output() revertBlock = new EventEmitter<any>();
    public blockForm: FormGroup;
    @Input('selectedBlock') block: Block = new Block();
    @Input() farms: any;
    @Input() isCollapsed:boolean;
    public submitted: boolean = false;
    public isEditing: boolean = false;


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.createForm();
    }
    createForm(){
        this.blockForm = this.formBuilder.group({
            idblocks: new FormControl(0),
            name: new FormControl(''),
            description: new FormControl(''),
            idfarm: new FormControl(0)
        });
    }

    onSubmit() {
        if(this.isEditing){
            this.editBlock.emit({block:this.blockForm.value,form:this.blockForm});
            this.isEditing = false;
        } else {
            this.addBlock.emit({block:this.blockForm.value,form:this.blockForm});
        }
        this.submitted = true; 
    }

    ngOnChanges(changes){
        if(changes.block && changes.block.currentValue){
            this.blockForm.setValue(changes.block.currentValue);
            this.isEditing = true;
        }
    }

    revert(){
        console.log('Entro');
        this.blockForm.reset();
        this.submitted = false;
        this.isEditing = false;
        this.revertBlock.emit(true);
    }

}