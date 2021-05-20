import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HouseCreate, TypeHouse} from '../model/house-create';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
const URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class TypeHouseService {

  constructor(private  httpClient: HttpClient) { }

  getAllTypeHouses(): Observable<TypeHouse[]> {
    return this.httpClient.get<TypeHouse[]>(URL+'/typeHouse')
  }
}
