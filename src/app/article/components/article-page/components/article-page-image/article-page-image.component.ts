import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-page-image',
  templateUrl: './article-page-image.component.html',
  styleUrls: ['./article-page-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePageImageComponent {
  @Input({ required: true }) imgSrc!: string;
}
