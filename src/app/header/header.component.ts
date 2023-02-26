import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private searchService: SearchService) { }

  goToHome() {
    this.router.navigate(['/tabs/home']);
  }

  searchTerm : string = "";

  searchResult() {
    // you have the value here
    console.log(this.searchTerm)
    this.searchService.keyword = this.searchTerm
    this.router.navigate(['/tabs/search-detail', {keyword:this.searchTerm}]);
  }
  

  ngOnInit() {}
  
}
