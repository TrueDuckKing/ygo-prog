import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CardAPI } from "src/app/shared/card-api.service";
import { Card } from "src/app/shared/card.model";

@Injectable({
  providedIn: 'root'
})
export class BanlistCustom {
  startedEditing = new Subject<number>();

  constructor(private cardApi: CardAPI, private http: HttpClient){}

  preCards = [
    {"status":"Banned", "name": "Yata-Garasu"},
    {"status": "Banned", "name": "Change of Heart"},
    {"status": "Banned", "name": "Dark Hole"},
    {"status": "Banned", "name": "Giant Trunade"},
    {"status": "Banned", "name": "Raigeki"},
    {"status": "Banned", "name": "Imperial Order"},
    {"status": "Limited", "name": "Pot of Greed"},
  ]

  cards: Array<Card> = []

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

  fetchCards(){
    for(let card of this.preCards){
      this.cardApi.getCard(card.name).subscribe(info => {
        const newCard = new Card(card.status, info.name, info.type);
        this.addCard(newCard);
        }
      )
    }
  }

}
