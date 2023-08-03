import { Component, OnInit } from '@angular/core';
import { Article } from '../../../shared/models/Article.model';
import { ArticleService } from '../../../shared/service/article.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadArticles } from '../../../store/articles.actions';
import { ArticleState } from '../../../store/articles.reducer';
import { selectArticles } from '../../../store/articles.selectors';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  articles$: Observable<Article[]> = this.store.select(selectArticles);

  constructor(private articleService: ArticleService, private store: Store<ArticleState>) {
  }

  ngOnInit() {
    this.store.dispatch(loadArticles());
  }

  trackById(index: number, article: Article) {
    return article.id;
  }
}
