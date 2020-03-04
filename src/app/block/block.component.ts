import { Component, OnInit } from '@angular/core';
import { BlockService } from '../services/';
import { FarmService } from '../services/';
import { Block } from '../models/block';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

    public farms;
    public isCollapsed = true;
    public selectedBlock : Block = new Block;
    public blocks: MatTableDataSource<Block>


    constructor(private blocksService: BlockService,private farmService: FarmService) { }

    ngOnInit() {
        this.getFarms();
        this.getBlocks();

    }

    getFarms(){
        this.farmService.getFarms().subscribe(data => {
            this.farms = data.farms;
          });
    }

    getBlocks(){
        this.blocksService.getBlocks().subscribe(data => {
            console.log(data.blocks);
            this.blocks = new MatTableDataSource<Block>(data.blocks);
          });
    }

    

    addBlock(block: any){ 
      console.log(block.block);
      delete block.block.idblocks;
      this.blocksService.addBlocks(block.block)
        .then(data => {
          console.log('usuario agregado');
          block.form.reset();
          this.getBlocks();
          this.OpenPanel();
        })
        .catch(error => {
          console.log(error);
          alert('El usuario seleccionado ya existe, por favor seleccione otro');
        });
    }

    updateBlockSave(block:any){
      this.blocksService.editBlocks(block.block)
      .then(data => {
        block.form.reset();
        this.getBlocks();
        this.OpenPanel();
      })
      .catch(error => {
        console.log('error',error);
      }); 
    }

    OpenPanel(){
      this.isCollapsed = !this.isCollapsed
    }

    updateBlock(block: Block){
      this.selectedBlock =block;
      this.OpenPanel()
    }

    deleteBlock(block: Block){
      if(confirm("Desea Eliminar el Registro?")){
        this.blocksService.removeBlocks(block)
        .then(data => {
          this.getBlocks();
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
