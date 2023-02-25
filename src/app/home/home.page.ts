import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    const mySwiper = new Swiper('.swiper-container');
  }

}
