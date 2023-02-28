import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { formatText } from '../services/forma';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-reader',
  templateUrl: './reader.page.html',
  styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  content: any;
  sanitizedContent: SafeHtml = "";
  
  ngOnInit() {
    const content = this.route.snapshot.paramMap.get('content');
    this.content = content
    console.log(content)
    this.http.get(this.content, {responseType: 'text'})
    //this.http.get('assets/pg1513.txt', {responseType: 'text'})
    .subscribe((data) => {
      this.content = data;
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(formatText(this.content));
    });
  }

}
