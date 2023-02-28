import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slogans: string[] = [
    "Read, think and grow rich",
    "Knowledge is power",
    "Today a reader. Tomorrow a leader.",
    "Read, Lead, Succeed.",
    "Read, it’s a need you can feed.",
    "Sssh! I’m reading.",
    "Reading feeds the imagination.",
    "Don’t panic – go organic.",
    "Born to read",
    "Take a look. Read a book!",
  ];


  slogan = '';
  randombooks:any;
  list:string="";
  randomBook:any = "";
  books: { image: string, titre: string, auteur: string }[] = [];


  refresh(){
    this.apiService.getRandomBook("").subscribe(data => {
      this.randombooks = data;
      const randomIndex = Math.floor(Math.random() * this.randombooks.length);
      this.randomBook = this.randombooks[randomIndex];
      console.log(this.randomBook)
    });
  }

  constructor(private apiService:ApiService) { }

  getRandomSlogan(){
    const index = Math.floor(Math.random()* this.slogans.length)
    this.slogan = this.slogans[index];
  }

  ngOnInit() {
    //const mySwiper = new Swiper('.swiper-container');
    this.getRandomSlogan();

    this.apiService.getRandomBook("").subscribe(data => {
      this.randombooks = data;
      const randomIndex = Math.floor(Math.random() * this.randombooks.length);
      this.randomBook = this.randombooks[randomIndex];
    });

    this.apiService.getBooks("").subscribe(data => {
      this.books = data;
      console.log(this.books)
    });
    
  }

}
