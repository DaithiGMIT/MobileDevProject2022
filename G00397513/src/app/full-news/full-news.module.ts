import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullNewsPageRoutingModule } from './full-news-routing.module';

import { FullNewsPage } from './full-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullNewsPageRoutingModule
  ],
  declarations: [FullNewsPage]
})
export class FullNewsPageModule {}
