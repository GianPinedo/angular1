import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/app/environment';
import { Location } from '@angular/common';

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
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private location: Location
  ) { }

  ngOnInit(): void {
    const apiBaseUrl = environment.apiBaseUrl;
    this.route.params.subscribe(params => {
      this.mealId = params['id'];
      this.http.get(`${apiBaseUrl}lookup.php?i=` + this.mealId)
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
