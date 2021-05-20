import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HouseCreate} from '../model/house-create';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
const URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private  httpClient: HttpClient) { }

  createHouse(house: HouseCreate): Observable<HouseCreate> {
    return this.httpClient.post<HouseCreate>(URL+'/house/create', house)
  }

  showAllHouse(): Observable<HouseCreate[]>  {
    return this.httpClient.get<HouseCreate[]>(URL + '/house')
  }
}
