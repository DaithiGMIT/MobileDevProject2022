import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'full-news',
    loadChildren: () => import('./full-news/full-news.module').then( m => m.FullNewsPageModule)
  },
  {
    path: 'full-news',
    loadChildren: () => import('./full-news/full-news.module').then( m => m.FullNewsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
