import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-page-title',
  templateUrl: './article-page-title.component.html',
  styleUrls: ['./article-page-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePageTitleComponent {
  @Input({ required: true }) articleTitle!: string;
}
