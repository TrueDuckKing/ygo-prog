import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/shared/card.model';
import { BanlistService } from '../banlist.service';

@Component({
  selector: 'app-banlist-custom',
  templateUrl: './banlist-custom.component.html',
  styleUrls: ['./banlist-custom.component.css']
})
export class BanlistCustomComponent implements OnInit, OnDestroy {
  cards: Array<Card> = [];
  private subscription!: Subscription

  constructor(private banlistService: BanlistService) { }

  ngOnInit(): void {
    this.cards = this.banlistService.getCustomCards();
    this.subscription = this.banlistService.customChanged.subscribe(
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
