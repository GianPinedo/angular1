import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mealId: any;
  mealDetails: any;
  //safeYoutubeUrl: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    //private safeYoutubeUrl: SafeResourceUrl
  ) { }

  ngOnInit(): void {
    // Obtener el ID del platillo desde la URL
    this.route.params.subscribe(params => {
      this.mealId = params['id'];
      // Realizar una solicitud para obtener los detalles del platillo por su ID
      this.http.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.mealId)
        .subscribe((data: any) => {
          this.mealDetails = data.meals[0];
        });
    });
  }
}
