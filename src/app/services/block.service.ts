import { Injectable } from '@angular/core';
import { Block } from '../models/block';
import { DataService } from '../services/data.service';


@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor(private dataService:DataService) { }

  public getBlocks(){
      return this.dataService.get('/api/blocks');
  }

  public addBlocks(block:Block){
    return this.dataService.post('/api/blocks',{'block':block});

  }
  public removeBlocks(block:Block){
      return this.dataService.delete('/api/blocks/'+block.idblocks);
  }
  public editBlocks(block:Block    ){
      return this.dataService.put('/api/blocks/',{'block':block});
  }
}
