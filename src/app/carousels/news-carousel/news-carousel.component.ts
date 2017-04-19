import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http"

@Component({
  selector: 'wow-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.css']
})
export class NewsCarouselComponent implements OnInit {

  newsResults = {}

  constructor(private http: Http) {
    http.get("/assets/ng-warcraft/data-sources/news.json")
    .subscribe(res => {
      this.newsResults = res.json();
      console.log(this.newsResults)
    })
  }

  ngOnInit() {
  }

}
