import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { BanlistOfficial } from './banlist-official.service';

@Component({
  selector: 'app-banlist-official',
  templateUrl: './banlist-official.component.html',
  styleUrls: ['./banlist-official.component.css']
})
export class BanlistOfficialComponent implements OnInit {
  cards: Array<Card> = []

  constructor(private banlistOfficial: BanlistOfficial) { }

  ngOnInit(): void {
    this.cards = this.banlistOfficial.cards
  }

}
