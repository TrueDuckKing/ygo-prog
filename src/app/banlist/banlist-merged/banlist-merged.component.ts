import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { BanlistCustom } from '../banlist-custom/banlist-custom.service';
import { BanlistOfficial } from '../banlist-official/banlist-official.service';

@Component({
  selector: 'app-banlist-merged',
  templateUrl: './banlist-merged.component.html',
  styleUrls: ['./banlist-merged.component.css']
})
export class BanlistMergedComponent implements OnInit {
  cards: Array<Card> = []

  constructor(private banlistCustom: BanlistCustom, private banlistOfficial: BanlistOfficial) { }

  ngOnInit(): void {
    let tempCards = this.banlistOfficial.cards.concat(...this.banlistCustom.cards)
    this.cards = tempCards
  }

  onEditCard(index: number){
    this.banlistCustom.startedEditing.next(index);
  }

}
