import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  private history: string[] = [];

  constructor() {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      this.history = JSON.parse(storedHistory);
    }
  }

  addSearch(query: string): void {
    this.history.unshift(query);
    this.saveHistoryToLocalStorage(); 
  }

  getHistory(): string[] {
    return this.history;
  }

  clearHistory(): void {
    this.history = [];
    localStorage.removeItem('searchHistory'); 
  }

  private saveHistoryToLocalStorage(): void {
    localStorage.setItem('searchHistory', JSON.stringify(this.history)); 
  }
}
