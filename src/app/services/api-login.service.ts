import { Injectable } from '@angular/core';
import { DataApi } from '../interface/data-api';
import{HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  //const apiKey= "http://localhost:55847/api/"
  list: DataApi[];
  readonly rootURL= "http://localhost:55847/api/Master_Users"
  ejemplo ="http://localhost:55847/api/Master_Users/3?UserName={mmarinez}"

  constructor(private http:HttpClient) { }

  getUser(id:number, UserName:string){

    return this.http.get<DataApi>(`http://localhost:55847/api/Master_Users/${id}?UserName=${{UserName}}`)
  }
}




