import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { CardAPI } from '../shared/card-api.service';
import { Card } from '../shared/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService implements OnInit{
  startedEditing = new Subject<number>();

  cards: Array<Card> = [
    new Card('Banned', 'Yata-Garasu', 'Effect Monster'),
  ]
  constructor(private cardApi: CardAPI) {}

  ngOnInit(): void {
  }

  getCard(index: number){
    return this.cards[index];
  }

  addCard(card: Card){
    this.cards.push(card);
  }

  updateCard(index: number, newCard: Card) {
    this.cards[index] = newCard;
  }

  removeCard(index: number){
    this.cards.splice(index, 1);
  }
}
