import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // servicio para obtener las categorías
  getCategories(): Observable<any[]> {
    const endpoint = `${this.apiBaseUrl}categories.php`;
    return this.http.get<any[]>(endpoint);
  }

  // servicio para obtener la lista de comidas
  getMealList(option: string, param: string): Observable<any[]> {
    const endpoint = option === 'search' ? `${this.apiBaseUrl}search.php?s=` : `${this.apiBaseUrl}filter.php?c=`;
    return this.http.get<any[]>(`${endpoint}${param}`);
  }

  // servicio para obtener el detalle de una comida
  getMealDetails(mealId: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}lookup.php?i=${mealId}`);
  }

}
