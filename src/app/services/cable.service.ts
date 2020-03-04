import { Injectable } from '@angular/core';
import { Cable } from '../models/cable';
import { DataService } from '../services/data.service';


@Injectable({
  providedIn: 'root'
})
export class CableService {

  constructor(private dataService:DataService) { }

  public getCables(){
      return this.dataService.get('/api/cables');
  }
  
  public addCable(cable:Cable){
    return this.dataService.post('/api/cables',{'cable':cable});

  }
  public removeCable(cable:Cable){
      return this.dataService.delete('/api/cables/'+cable.idcables);
  }
  public editCable(cable:Cable){
      return this.dataService.put('/api/cables/',{'cable':cable});
  }
}
