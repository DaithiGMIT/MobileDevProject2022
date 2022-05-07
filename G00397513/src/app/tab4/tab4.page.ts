import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  newsCountry:string = "";

  constructor(private storage:Storage) { }
  

  ngOnInit() {
  }

  changeCountry()
  {
    //creates and saves a string variable into local storage as country to be used by the news tab1 to define what country the headlines are from

    this.storage.create()
    .then(()=>{
      this.storage.set("country", this.newsCountry)
    })
    .then(()=>{
      console.log(this.newsCountry)
    })
    .catch(()=>{console.log("Failed log")})
    .catch(()=>{console.log("Failed Set")});
  }

}
