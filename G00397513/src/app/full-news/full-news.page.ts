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
  altImgSrc = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png';

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }


}
