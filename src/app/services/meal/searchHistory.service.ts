import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  private history: string[] = [];

  constructor() { }

  addSearch(query: string): void {
    this.history.unshift(query); 
  }

  getHistory(): string[] {
    return this.history;
  }

  clearHistory(): void {
    this.history = [];
  }
 
}
