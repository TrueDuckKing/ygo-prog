import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
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

  constructor(private cardApiService: CardAPIService, private http: HttpClient){}

  preCardsCustom = [
    {"status": "Banned", "name": "Yata-Garasu"},
    {"status": "Banned", "name": "Change of Heart"},
    {"status": "Banned", "name": "Dark Hole"},
    {"status": "Banned", "name": "Giant Trunade"},
    {"status": "Banned", "name": "Raigeki"},
    {"status": "Banned", "name": "Imperial Order"},
    {"status": "Limited", "name": "Pot of Greed"},
  ]

  preCardsOfficial = [
    {"status": "Limited", "name": "Exodia the Forbidden One"},
    {"status": "Limited", "name": "Left Leg of the Forbidden One"},
    {"status": "Limited", "name": "Left Arm of the Forbidden One"},
    {"status": "Limited", "name": "Right Leg of the Forbidden One"},
    {"status": "Limited", "name": "Right Arm of the Forbidden One"},
    {"status": "Limited", "name": "Cyber Jar"},
    {"status": "Limited", "name": "Witch of the Black Forest"},
    {"status": "Limited", "name": "Jinzo"},
    {"status": "Limited", "name": "Morphing Jar"},
    {"status": "Limited", "name": "Sangan"},
    {"status": "Limited", "name": "Sinister Serpent"},
    {"status": "Limited", "name": "Exiled Force"},
    {"status": "Limited", "name": "Fiber Jar"},
    {"status": "Limited", "name": "Injection Fairy Lily"},
    {"status": "Limited", "name": "Twin-Headed Behemoth"},
    {"status": "Limited", "name": "Breaker the Dark Magical Warrior"},
    {"status": "Limited", "name": "Tribe-Infecting Virus"},
    {"status": "Limited", "name": "Magical Scientist"},
    {"status": "Limited", "name": "Reflect Bounder"},
    {"status": "Limited", "name": "Vampire Lord"},
    {"status": "Limited", "name": "Monster Reborn"},
    {"status": "Limited", "name": "Delinquent Duo"},
    {"status": "Limited", "name": "Confiscation"},
    {"status": "Limited", "name": "Painful Choice"},
    {"status": "Limited", "name": "The Forceful Sentry"},
    {"status": "Limited", "name": "Snatch Steal"},
    {"status": "Limited", "name": "Upstart Goblin"},
    {"status": "Limited", "name": "Swords of Revealing Light"},
    {"status": "Limited", "name": "Card Destruction"},
    {"status": "Limited", "name": "Premature Burial"},
    {"status": "Limited", "name": "United We Stand"},
    {"status": "Limited", "name": "Mage Power"},
    {"status": "Limited", "name": "Harpie\'s Feather Duster"},
    {"status": "Limited", "name": "Graceful Charity"},
    {"status": "Limited", "name": "Mirage of Nightmare"},
    {"status": "Limited", "name": "Heavy Storm"},
    {"status": "Limited", "name": "Butterfly Dagger - Elma"},
    {"status": "Limited", "name": "Ceasefire"},
    {"status": "Limited", "name": "Call of the Haunted"},
    {"status": "Limited", "name": "Mirror Force"},
    {"status": "Limited", "name": "Magic Cylinder"},
    {"status": "Limited", "name": "Ring of Destruction"},
    {"status": "Limited", "name": "Reckless Greed"},
    {"status": "Semi-Limited", "name": "Morphing Jar 2"},
    {"status": "Semi-Limited", "name": "Marauding Captain"},
    {"status": "Semi-Limited", "name": "Nobleman of Crossout"},
    {"status": "Semi-Limited", "name": "Creature Swap"},
    {"status": "Semi-Limited", "name": "Reinforcement of the Army"},
    {"status": "Semi-Limited", "name": "Last Turn"}
  ]

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
    for(let card of this.preCardsCustom){
      this.cardApiService.getCard(card.name).subscribe(info => {
        const newCard = new Card(card.status, info.name, info.type);
        this.cardsCustom.push(newCard);
        this.emitChange();
        }
      )
    }
    for(let card of this.preCardsOfficial){
      this.cardApiService.getCard(card.name).subscribe(info => {
        const newCard = new Card(card.status, info.name, info.type);
        this.cardsOfficial.push(newCard)
        this.emitChange();
        }
      )
    }
  }
}
