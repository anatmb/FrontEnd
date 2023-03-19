import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  [x: string]: any;
  url = 'https://bankendfinal.onrender.com/educacion/';
  

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
  }

  
  public save(educacion: Educacion): Observable<any> {
    console.log("oncreate",educacion);
    return this.httpClient.post<any>(this.url + `create`, educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    console.log("onupdate",educacion);
    return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
    
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}