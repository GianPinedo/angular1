import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { MealService } from 'src/app/services/meal/meal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mealId: any;
  mealDetails: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private mealService: MealService 
  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mealId = params['id'];
      this.mealService.getMealDetails(this.mealId)
        .subscribe((data: any) => {
          this.mealDetails = data.meals[0];
        });
    });
  }
  
  getIngredientesYMedidas(): { strIngredient: string, strMeasure: string }[] {
    const ingredientesYMedidas = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = this.mealDetails[`strIngredient${i}`];
      const measure = this.mealDetails[`strMeasure${i}`];

      if (ingredient && measure) {
        ingredientesYMedidas.push({ strIngredient: ingredient, strMeasure: measure });
      }
    }

    return ingredientesYMedidas;
  }

  goBack(): void {
    this.location.back();
  }
}
