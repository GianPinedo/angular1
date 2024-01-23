import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment';
import { MealService } from 'src/app/services/meal/meal.service';

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

  constructor(private http: HttpClient, private mealService: MealService ) { }

  ngOnInit(): void {
    this.loadCategories(); 
  }

  loadCategories(): void {
    this.mealService.getCategories().subscribe((data: any) => {
      this.categories = data.categories;
    });
  }

  searchMeals(): void {
    this.isLoading = true;
    const category = this.selectedCategory === 'Busca por categorías' ? this.searchInput : this.selectedCategory;
    this.mealService.getMealList(category).subscribe((data: any) => {
      this.meals = data.meals;
      this.isLoading = false; 
    });
  }
  
}
