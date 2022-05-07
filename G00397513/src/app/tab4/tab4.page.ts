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
