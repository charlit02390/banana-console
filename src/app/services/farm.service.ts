import { Injectable } from '@angular/core';
import { Farm } from '../models/farm';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor(private dataService:DataService) { }

  public getFarms(){
      return this.dataService.get('/api/farms');
  }

  public getRoles(){
      return this.dataService.get('/api/static/roles');
  }

  public addFarm(farm:Farm){
    return this.dataService.post('/api/farms',{'farm':farm});

  }
  public removeFarm(farm:Farm){
      return this.dataService.delete('/api/farms/'+farm.idfarms);
  }
  public editFarm(farm:Farm){
      return this.dataService.put('/api/farms/',{'farm':farm});
  }
}
