import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment';

@Component({
  selector: 'app-index',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class IndexComponent implements OnInit {
  categories: any[] = [];
  meals: any[] = [];
  selectedCategory: string = 'Busca por categorías';
  searchInput: any;
  selectedCategoryName: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const apiBaseUrl = environment.apiBaseUrl;
    this.http.get(`${apiBaseUrl}categories.php`).subscribe((data: any) => {
      this.categories = data.categories;
    });
  }

  searchMeals(): void {
    this.isLoading = true;
    const apiBaseUrl = environment.apiBaseUrl;
    let param = this.selectedCategory === 'Busca por categorías' ? this.searchInput : this.selectedCategory;
    let endpoint = `${apiBaseUrl}${this.selectedCategory === 'Busca por categorías' ? 'search.php?s=' : 'filter.php?c='}` + param;
    this.http.get(endpoint).subscribe((data: any) => {
      this.meals = data.meals;
      this.isLoading = false; 
    });
  }
  
}
