import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/Card.model';
import { CardService } from '../../service/card.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  cards$: Observable<Card[]> = new Observable<Card[]>();
  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cards$ = this.cardService.getCards().pipe(map(res => res.results))
  }
}
