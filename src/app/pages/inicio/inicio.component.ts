import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal/meal.service';
import { SearchHistoryService } from 'src/app/services/meal/searchHistory.service';
import { ActivatedRoute } from '@angular/router';

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
  isLoading: boolean = false;
  noData: boolean = false;

  constructor(
    private mealService: MealService,
    private searchHistoryService: SearchHistoryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadCategories();
      this.route.params.subscribe(params => {
      this.searchInput = params['search'];
     }
    );
    if (this.searchInput) {
      this.searchMeals();
    }
  }

  loadCategories(): void {
    this.mealService.getCategories().subscribe((data: any) => {
      this.categories = data.categories;
    });
  }

  searchMeals(): void {
    this.isLoading = true;
    const option = this.selectedCategory === 'Busca por categorías' ? 'search' : 'category';
    const param = this.selectedCategory === 'Busca por categorías' ? this.searchInput : this.selectedCategory;
    if (option === 'search') {
      this.searchHistoryService.addSearch(param);
    } else {
      this.searchInput = '';
    }
    this.mealService.getMealList(option, param).subscribe((data: any) => {
      this.meals = data.meals || [];
      this.noData = this.meals.length === 0;
      this.isLoading = false;
    });
  }
}
