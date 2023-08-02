import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { ArticlePageImageComponent } from './components/article-page/components/article-page-image/article-page-image.component';
import { ArticlePageBodyComponent } from './components/article-page/components/article-page-body/article-page-body.component';
import { ArticlePageTitleComponent } from './components/article-page/components/article-page-body/components/article-page-title/article-page-title.component';
import { ArticlePageDescriptionComponent } from './components/article-page/components/article-page-body/components/article-page-description/article-page-description.component';
import { ArticlePageBackButtonComponent } from './components/article-page/components/article-page-back-button/article-page-back-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [
        ArticlePageComponent,
        ArticlePageImageComponent,
        ArticlePageBodyComponent,
        ArticlePageTitleComponent,
        ArticlePageDescriptionComponent,
        ArticlePageBackButtonComponent
    ],
    exports: [
        ArticlePageComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ArticleModule { }
