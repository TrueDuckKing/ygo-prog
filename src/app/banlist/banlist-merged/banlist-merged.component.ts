import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/shared/card.model';
import { BanlistService } from '../banlist.service';

@Component({
  selector: 'app-banlist-merged',
  templateUrl: './banlist-merged.component.html',
  styleUrls: ['./banlist-merged.component.css']
})
export class BanlistMergedComponent implements OnInit, OnDestroy {
  cards: Array<Card> = [];
  private subscription!: Subscription

  constructor(private banlistService: BanlistService) { }

  ngOnInit(): void {
    this.cards = this.banlistService.getAllCards();
    this.subscription = this.banlistService.mergedChanged.subscribe(
      (cards: Card[]) => {
        this.cards = cards
      }
    )
  }

  onEditCard(index: number){
    this.banlistService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
