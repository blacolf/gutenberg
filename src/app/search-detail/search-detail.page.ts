import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.page.html',
  styleUrls: ['./search-detail.page.scss'],
})
export class SearchDetailPage implements OnInit {

  constructor(private searchService: SearchService) { }


  keyword :string = "";

  ngOnInit() {
    this.keyword = this.searchService.keyword;
  }

}
