import { Component, OnInit } from '@angular/core';
import { Article } from '../../../shared/models/Article.model';
import { ArticleService } from '../../../shared/service/article.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  articles: Observable<Article[]> = new Observable<Article[]>();
  constructor(private cardService: ArticleService) {}

  ngOnInit() {
    this.articles = this.cardService.getArticles().pipe(map(res => res.results))
  }
}
