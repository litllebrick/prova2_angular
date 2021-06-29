import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fatura } from './fatura';

@Injectable({
  providedIn: 'root'
})
export class FaturaService {

  private url = "https://calm-anchorage-20290.herokuapp.com/api/v1/bills"

  constructor(private http: HttpClient) { }

  post(fatura: Fatura) : Observable<Fatura> {
    console.log(fatura)
    return this.http.post<Fatura>(this.url, fatura)
  } 

  get() : Observable<Fatura[]> {
    return this.http.get<Fatura[]>(this.url + '?customer')
  }

  getById(nome) : Observable<Fatura[]> {
    return this.http.get<Fatura[]>(this.url + '?customer=' + nome)
  }

  delete(faturaId: number) : Observable<Fatura> {
    return this.http.delete<Fatura>(this.url + "/" + faturaId)
  }

}
