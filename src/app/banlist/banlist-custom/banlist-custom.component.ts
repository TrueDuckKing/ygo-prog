import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { BanlistCustom } from './banlist-custom.service';

@Component({
  selector: 'app-banlist-custom',
  templateUrl: './banlist-custom.component.html',
  styleUrls: ['./banlist-custom.component.css']
})
export class BanlistCustomComponent implements OnInit {
  cards: Array<Card> = [];

  constructor(private banlistCustom: BanlistCustom) { }

  ngOnInit(): void {
    this.cards = this.banlistCustom.cards;
  }

  onEditCard(index: number){
    this.banlistCustom.startedEditing.next(index);
  }

}
