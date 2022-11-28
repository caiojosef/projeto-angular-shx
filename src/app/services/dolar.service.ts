import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { DolarData } from '../models/dolarData'

@Injectable({
  providedIn: 'root'
})
export class DolarService {
  private baseUrl: string = ""
  private pokeDolar: DolarData | any

  constructor(private http:HttpClient) {
    this.baseUrl = environment.dolarUrl
   }

  getDolar(valorDolar:string):Observable<DolarData>{
  this.pokeDolar = this.http.get<DolarData>(`${this.baseUrl}${valorDolar}`)
  return this.pokeDolar

  }
}
