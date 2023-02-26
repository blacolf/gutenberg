import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { formatText } from '../services/forma';


@Component({
  selector: 'app-reader',
  templateUrl: './reader.page.html',
  styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  content: string = '';
  sanitizedContent: SafeHtml = "";
  
  ngOnInit() {
    this.http.get('assets/pg1513.txt', {responseType: 'text'})
    .subscribe((data) => {
      this.content = data;
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(formatText(this.content));
    });
  }

}
