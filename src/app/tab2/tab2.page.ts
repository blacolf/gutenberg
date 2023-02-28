import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  searchHistory:any;

  constructor(private history:HistoryService) {}

  ngOnInit(){
      this.searchHistory = this.history.searchHistory
  }

}
