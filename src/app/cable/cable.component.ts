import { Component, OnInit } from '@angular/core';
import { CableService } from '../services/';
import { BlockService } from '../services/';
import { Cable } from '../models/cable';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-cable',
  templateUrl: './cable.component.html',
  styleUrls: ['./cable.component.css']
})
export class CableComponent implements OnInit {

    public blocks;
    public institutions;
    public isCollapsed = true;
    public selectedCable : Cable = new Cable;
    public cables: MatTableDataSource<Cable>


    constructor(private cableService: CableService, private blockService: BlockService) { }

    ngOnInit() {
        this.getBlocks();
        this.getCables();

    }

    getBlocks(){
        this.blockService.getBlocks().subscribe(data => {
            this.blocks = data.blocks;
          });
    }

    getCables(){
        this.cableService.getCables().subscribe(data => {
            console.log(data.cables);
            this.cables = new MatTableDataSource<Cable>(data.cables);
          });
    }

    

    addCable(cable: any){ 
      console.log(cable.cable);
      delete cable.cable.idcables;
      this.cableService.addCable(cable.cable)
        .then(data => {
          console.log('usuario agregado');
          cable.form.reset();
          this.getCables();
          this.OpenPanel();
        })
        .catch(error => {
          console.log(error);
          alert('El usuario seleccionado ya existe, por favor seleccione otro');
        });
    }

    updateCableSave(cable:any){
      this.cableService.editCable(cable.cable)
      .then(data => {
        cable.form.reset();
        this.getCables();
        this.OpenPanel();
      })
      .catch(error => {
        console.log('error',error);
      }); 
    }

    OpenPanel(){
      this.isCollapsed = !this.isCollapsed
    }

    updateCable(cable: Cable){
      this.selectedCable =cable;
      this.OpenPanel()
    }

    deleteCable(cable: Cable){
      if(confirm("Desea Eliminar el Registro?")){
        this.cableService.removeCable(cable)
        .then(data => {
          this.getCables();
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
