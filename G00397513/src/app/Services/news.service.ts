import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.newsApiUrl;
const API_KEY = environment.newsApiKey;


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //retrieves data from the news api at newsapi.org

  currentArticle: any;

  constructor(private http:HttpClient) { }

  getData(url){
    return this.http.get((API_URL + '/' + url + API_KEY));
  }

  
}
