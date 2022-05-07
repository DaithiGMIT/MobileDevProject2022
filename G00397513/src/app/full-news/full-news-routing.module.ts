import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullNewsPage } from './full-news.page';

const routes: Routes = [
  {
    path: '',
    component: FullNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullNewsPageRoutingModule {}
