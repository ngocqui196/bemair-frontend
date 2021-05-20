import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HouseStatus} from '../model/house-create';
import {environment} from '../../environments/environment';
const URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class StatusHouseService {

  constructor(private httpClient: HttpClient) { }

  getAllHouseStatus(): Observable<HouseStatus[]> {
    return this.httpClient.get<HouseStatus[]> ( URL + '/houseStatus')
  }
}
