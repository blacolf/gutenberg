import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.page.html',
  styleUrls: ['./search-detail.page.scss'],
})
export class SearchDetailPage implements OnInit{
  

  goToReader(){
    this.router.navigate(['./reader'])
  }

  constructor(
    private searchService: SearchService, 
    private router: Router, 
    private apiService:ApiService,
    private route: ActivatedRoute,
    private history: HistoryService) {}

  keyword :string = ""
  books: any
  searchTerm: string= ''

  ngOnInit() {
    this.keyword = this.searchService.keyword;
    this.apiService.getBooks(this.keyword).subscribe(data => {
      this.books = data;
      this.history.searchHistory=this.books;
    });
  }

}
