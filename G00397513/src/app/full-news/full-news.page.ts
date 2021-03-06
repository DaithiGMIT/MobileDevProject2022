import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.page.html',
  styleUrls: ['./full-news.page.scss'],
})
export class FullNewsPage implements OnInit {

  article;

  imgSrc;
  //retrieves the current article from the headline clicked in tab one and uses it to populate the page

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }


}
