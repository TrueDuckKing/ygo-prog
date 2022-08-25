import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-banlist',
  templateUrl: './banlist.component.html',
  styleUrls: ['./banlist.component.css']
})
export class BanlistComponent implements OnInit {
  cards: Array<Card> = [];

  constructor(private cardsService: CardsService){}

  ngOnInit(){
    this.cards = this.cardsService.cards;
  }
}
