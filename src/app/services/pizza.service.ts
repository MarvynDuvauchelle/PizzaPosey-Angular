import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs';

@Injectable()
export class PizzaService {

  private url = "https://pizzaposey-cloned-marvyn.c9users.io/pizza";

  constructor(private http: HttpClient) { }

  get(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.url);
   }

  getOne(id): Observable<Pizza> {
    return this.http.get<Pizza>(this.url + "/" + id);
  }

  add(pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.url, pizza);
  }

  edit(pizza): Observable<Pizza> {
    console.log(pizza);
    return this.http.put<Pizza>(this.url + "/" + pizza._id, pizza);
  }

  delete(id): Observable<Pizza> {
    return this.http.delete<Pizza>(this.url + "/" + id);
  }
  
}
