import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

import { NewsService } from '../Services/news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data:any =[];
  countryCode:string = "ie";

  
  constructor(private newsService: NewsService, private router:Router, private storage:Storage) {}

  ngOnInit()
  {
    //reads the headlines from the news api using the varioables from the enviromnet page
    this.newsService.getData('top-headlines?country=' + environment.countryCode + '&apiKey=').subscribe(data => {console.log(data);
    this.data = data;});
  }

  onGoToNewsSinglePage(article)
  {
    //sends the clicked articles data to the full news page

    this.newsService.currentArticle = article;
    this.router.navigate(['/full-news']);
  }

  ionViewWillEnter()
  {
    //refreshes the page to check for updated country code from tab 4 in local storage

    this.storage.create()
    .then(()=>{this.storage.get('country')
    .then((country)=>{
      this.countryCode = country;})
      .catch(()=>{});
    }).catch(()=>{this.countryCode = environment.countryCode});

    this.newsService.getData('top-headlines?country=' + this.countryCode + '&apiKey=').subscribe(data => {console.log(data);
      this.data = data;});
      console.log('Page Reloaded');
  }

}
