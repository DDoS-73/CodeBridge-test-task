import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-page-body',
  templateUrl: './article-page-body.component.html',
  styleUrls: ['./article-page-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePageBodyComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
