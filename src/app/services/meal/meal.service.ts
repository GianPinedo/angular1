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

  getCategories(): Observable<any[]> {
    const endpoint = `${this.apiBaseUrl}categories.php`;
    return this.http.get<any[]>(endpoint);
  }

  getMealList(category: string): Observable<any[]> {
    const endpoint = category === 'Busca por categorías' ? `${this.apiBaseUrl}search.php?s=` : `${this.apiBaseUrl}filter.php?c=`;
    return this.http.get<any[]>(`${endpoint}${category}`);
  }

  getMealDetails(mealId: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}lookup.php?i=${mealId}`);
  }

}
