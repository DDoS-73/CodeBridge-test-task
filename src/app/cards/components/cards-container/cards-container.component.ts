import { Component, OnInit } from '@angular/core';
import { Article } from '../../../shared/models/Article.model';
import { ArticleService } from '../../../shared/service/article.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadArticles } from '../../../store/articles/articles.actions';
import { ArticleState } from '../../../store/articles/articles.reducer';
import { selectArticles } from '../../../store/articles/articles.selectors';
import { selectSearchText } from '../../../store/search-text/search-text.selectors';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  searchInput$: Observable<string> = this.store.select(selectSearchText);
  articles$: Observable<Article[]> = this.store.select<ArticleState>(selectArticles);

  constructor(private articleService: ArticleService, private store: Store) {
  }

  ngOnInit() {
    this.searchInput$.subscribe(searchText =>
      this.store.dispatch(loadArticles({searchText}))
    );
  }

  trackById(index: number, article: Article) {
    return article.id;
  }
}
