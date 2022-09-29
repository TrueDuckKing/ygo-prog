import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { forkJoin, Subject } from "rxjs";
import { CardAPIService } from "src/app/shared/card-api.service";
import { Card } from "src/app/shared/card.model";

@Injectable({
  providedIn: 'root'
})
export class BanlistService {
  mergedChanged = new Subject<Card[]>();
  customChanged = new Subject<Card[]>();
  officialChanged = new Subject<Card[]>();

  startedEditing = new Subject<number>();

  constructor(private cardApiService: CardAPIService, private http: HttpClient, private db: AngularFireDatabase){}

  cardsCustom: Card[] = []

  cardsOfficial: Card[] = []

  getCustomCards(){
    return this.cardsCustom.slice()
  }

  getOfficialCards(){
    return this.cardsOfficial.slice()
  }

  getAllCards(){
    return this.cardsOfficial.slice().concat(...this.cardsCustom.slice())
  }

  emitChange(){
    this.customChanged.next(this.cardsCustom.slice());
    this.mergedChanged.next(this.getAllCards());
    this.officialChanged.next(this.cardsOfficial.slice());
  }

  getCard(index: number){
    return this.cardsCustom[index];
  }

  addCard(card: Card){
    this.cardsCustom.push(card);
    this.emitChange();
  }

  updateCard(index: number, newCard: Card) {
    this.cardsCustom[index] = newCard;
    this.emitChange();
  }

  removeCard(index: number){
    this.cardsCustom.splice(index, 1);
    this.emitChange();
  }

  fetchCards(){
    this.db.list<{"name": string, "status": string}>('custom').valueChanges().subscribe(res =>{
      // this.cardApiService.getCards(res)
      for(let card of res){
        this.cardApiService.getCard(card.name).subscribe(info => {
          const newCard = new Card(card.status, info.name, info.type);
          this.cardsCustom.push(newCard);
          this.emitChange();
          }
        )}
    })
    this.db.list<{"name": string, "status": string}>('official').valueChanges().subscribe(res =>{
      for(let card of res){
        this.cardApiService.getCard(card.name).subscribe(info => {
          const newCard = new Card(card.status, info.name, info.type);
          this.cardsOfficial.push(newCard)
          this.emitChange();
          }
        )
      }
    })
  }
}
