import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

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
    private route: ActivatedRoute) {}

  keyword :string = "";
  books: any;
  searchTerm: string= ''

  ngOnInit() {
    console.log(this.keyword)
    this.keyword = this.searchService.keyword;
    this.apiService.getBooks(this.keyword).subscribe(data => {
      this.books = data;
      console.log(this.books)
    });
      
  }

}
