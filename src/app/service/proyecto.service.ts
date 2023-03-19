import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  [x: string]: any;
  url = 'https://bankendfinal.onrender.com/proyectos/';
  

  constructor(private httpClient:HttpClient) {}

   public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url+ 'lista');
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `detail/${id}`);
  }

  
  public save(proyecto: Proyecto): Observable<any> {
    console.log("oncreate",proyecto);
    return this.httpClient.post<any>(this.url + `create`, proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any> {
    console.log("onupdateyyyyyyyyyyyyyyyyyyy",proyecto);
    return this.httpClient.put<any>(this.url + `update/${id}`, proyecto);
    
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
