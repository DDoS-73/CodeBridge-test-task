import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ArticlePageComponent } from './article/components/article-page/article-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/articles'},
  {path: 'articles', component: HomePageComponent},
  {path: 'articles/:id', component: ArticlePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
