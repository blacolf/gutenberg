import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.page.html',
  styleUrls: ['./search-detail.page.scss'],
})
export class SearchDetailPage implements OnInit {

  goToReader(){
    this.router.navigate(['./reader'])
  }

  constructor(private searchService: SearchService, private router: Router) { }


  keyword :string = "";

  ngOnInit() {
    this.keyword = this.searchService.keyword;
  }

}
