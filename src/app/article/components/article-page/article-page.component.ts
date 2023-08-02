import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../shared/service/article.service';
import { Article } from '../../../shared/models/Article.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article$!: Observable<Article>;
  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.article$ = this.articleService.getArticleByID(20221);
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.article$ = this.articleService.getArticleByID(id);
    // }
  }
}
