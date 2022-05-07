import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonThumbnail } from '@ionic/angular';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data:any =[];

  placeHolderImageSrc: 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png';
  
  constructor(private newsService: NewsService, private router:Router) {}

  ngOnInit()
  {
    this.newsService.getData('top-headlines?category=sports&language=en&apiKey=').subscribe(data => {console.log(data);
    this.data = data;});
  }

  onGoToNewsSinglePage(article)
  {
    this.newsService.currentArticle = article;
    this.router.navigate(['/full-news']);
  }
  

}
