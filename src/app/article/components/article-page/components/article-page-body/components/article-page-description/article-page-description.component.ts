import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-page-description',
  templateUrl: './article-page-description.component.html',
  styleUrls: ['./article-page-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePageDescriptionComponent {
  @Input({ required: true }) description!: string;
}
