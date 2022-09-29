import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/shared/card.model';
import { BanlistService } from '../banlist.service';

@Component({
  selector: 'app-banlist-official',
  templateUrl: './banlist-official.component.html',
  styleUrls: ['./banlist-official.component.css']
})
export class BanlistOfficialComponent implements OnInit, OnDestroy {
  cards: Array<Card> = [];
  private subscription!: Subscription

  constructor(private banlistService: BanlistService) { }

  ngOnInit(): void {
    this.cards = this.banlistService.getOfficialCards()
    this.subscription = this.banlistService.officialChanged.subscribe(
      (cards: Card[]) => {
        this.cards = cards
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
