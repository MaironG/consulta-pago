import { Injectable } from '@angular/core';
import { DataApi } from '../interface/data-api';
import{HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  //const apiKey= "http://localhost:55847/api/"
  list: DataApi[];
  readonly rootURL= "http://localhost:55421/api/"

  constructor(private http:HttpClient) { }

  getUser(){

    return this.http.get<DataApi>(`rootURL`)
  }
}




