import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '../../../shared/models/Article.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card!: Article;
}
