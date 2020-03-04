import { Component, OnInit } from '@angular/core';
import { FarmService } from '../services/';
import { Farm } from '../models/farm';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

    public isCollapsed = true;
    public selectedFarm : Farm = new Farm;
    public farms: MatTableDataSource<Farm>


    constructor(private farmService: FarmService) { }

    ngOnInit() {
        this.getFarms();

    }

    getFarms(){
        this.farmService.getFarms().subscribe(data => {
            console.log(data.farms);
            this.farms = new MatTableDataSource<Farm>(data.farms);
          });
    }

    

    addFarm(farm: any){ 
      console.log(farm.farm);
      delete farm.farm.idfarms;
      this.farmService.addFarm(farm.farm)
        .then(data => {
          console.log('usuario agregado');
          farm.form.reset();
          this.getFarms();
          this.OpenPanel();
        })
        .catch(error => {
          console.log(error);
          alert('El usuario seleccionado ya existe, por favor seleccione otro');
        });
    }

    updateFarmSave(farm:any){
      this.farmService.editFarm(farm.farm)
      .then(data => {
        farm.form.reset();
        this.getFarms();
        this.OpenPanel();
      })
      .catch(error => {
        console.log('error',error);
      }); 
    }

    OpenPanel(){
      this.isCollapsed = !this.isCollapsed
    }

    updateFarm(farm: Farm){
      this.selectedFarm =farm;
      this.OpenPanel()
    }

    deleteFarm(farm: Farm){
      if(confirm("Desea Eliminar el Registro?")){
        this.farmService.removeFarm(farm)
        .then(data => {
          this.getFarms();
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
