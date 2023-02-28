import { Injectable, OnInit } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import { serialize } from 'v8';

@Injectable({
  providedIn: 'root'
})
export class HistoryService implements OnInit{

  searchHistory: any;

  constructor() { }

  ngOnInit() {
    this.searchHistory = this.searchHistory
  }
}
