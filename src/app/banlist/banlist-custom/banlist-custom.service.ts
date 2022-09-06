import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Card } from "src/app/shared/card.model";

@Injectable({
  providedIn: 'root'
})
export class BanlistCustom {
  startedEditing = new Subject<number>();

  cards: Array<Card> = [
    new Card('Banned', 'Yata-Garasu', 'Effect Monster'),
  ]

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
