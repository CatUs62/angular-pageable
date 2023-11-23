import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avaliacao } from '../dtos/IAvaliacao';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseApi: string = "http://localhost:8080/api/v1/avaliacao";

  constructor(private http: HttpClient) { }

  listar(size: number): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(`${this.baseApi}?size=${size}`);
  }

  deletar(id: number): Observable<Avaliacao> {
    return this.http.delete<Avaliacao>(`${this.baseApi}/${id}`);
  }
}
