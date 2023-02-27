import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SearchService } from '../services/search.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router, private searchService: SearchService, private apiService:ApiService) { }

  goToHome() {
    this.router.navigate(['/tabs/home']);
  }

  searchTerm : string = "";
  books:any;


  keyword() {
    console.log(this.searchTerm)
    this.searchService.keyword = this.searchTerm;
    this.router.navigate(['/tabs/search-detail', {keyword:this.searchTerm}]);
  }


  search(){
    this.searchService.keyword = this.searchTerm;
    this.apiService.getBooks(this.searchTerm).subscribe(data => {
      let navigationExtras: NavigationExtras = {
        state: {
          books: data,
          keyword: this.searchTerm
        }
      };
      this.router.navigate(['/tabs/search-detail'], navigationExtras);
    });
  }

  ngOnInit() {
    this.searchService.keyword = this.searchTerm;
  }
}
