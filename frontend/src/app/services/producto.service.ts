import { Producto } from './../models/producto';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = environment.productoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<{ message: string, properties: Producto[] }> {
    return this.httpClient.get<{ message: string, properties: Producto[] }>(`${this.productoURL}`);
  }

  public detail(_id: string): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.productoURL}/property?propertyID=${_id}`);
  }

  public save(producto: Producto): Observable<any> { 
    return this.httpClient.post<any>(`${this.productoURL}/create`, producto);
  }

  public update(_id: string, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(`${this.productoURL}/update?propertyID=${_id}`, producto);
  }

  public delete(_id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.productoURL}/delete?propertyID=${_id}`);
  }
}
