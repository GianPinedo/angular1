import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from 'src/app/services/meal/searchHistory.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  searchHistory: string[] = [];

  constructor(private searchHistoryService: SearchHistoryService) { }

  ngOnInit(): void {
    this.loadSearchHistory();
  }

  loadSearchHistory(): void {
    this.searchHistory = this.searchHistoryService.getHistory();
  }
  redirectToSearch(query: string): void {
    console.log(query);
  }
}
