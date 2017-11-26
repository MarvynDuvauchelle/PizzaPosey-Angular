import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs';

@Injectable()
export class IngredientService {

  private url = "https://pizzaposey-cloned-marvyn.c9users.io/ingredient";

  constructor(private http: HttpClient) { }

  get(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.url);
   }

  getOne(id): Observable<Ingredient> {
    return this.http.get<Ingredient>(this.url + "/" + id);
  }

  add(ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.url, ingredient);
  }
    
  edit(ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(this.url + "/" + ingredient._id, ingredient);
  }

  delete(id): Observable<Ingredient> {
    return this.http.delete<Ingredient>(this.url + "/" + id);
  }
  
}
