import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CardAPIService } from 'src/app/shared/card-api.service';
import { Card } from 'src/app/shared/card.model';
import { BanlistService } from '../banlist.service';

@Component({
  selector: 'app-banlist-edit',
  templateUrl: './banlist-edit.component.html',
  styleUrls: ['./banlist-edit.component.css']
})
export class BanlistEditComponent implements OnInit, OnDestroy {
  @ViewChild('x', {static:false}) cardForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedCardIndex!: number;
  editedCard!: Card;

  constructor(private cardAPIService: CardAPIService, private banlistService: BanlistService) { }

  ngOnInit(){
    this.subscription = this.banlistService.startedEditing.subscribe(
      (index: number) => {
        this.editedCardIndex = index;
        this.editMode = true;
        this.editedCard = this.banlistService.getCard(index);
        this.cardForm.setValue({
          name: this.editedCard.name,
          status: this.editedCard.status
        });
      }
      );
  }

  onAddCard(form: NgForm) {
    const value = form.value;
    this.cardAPIService.getCard(value.name)
      .subscribe(
        cardInfo => {
          const newCard = new Card(value.status, cardInfo.name, cardInfo.type);
          if(this.editMode) {
            this.banlistService.updateCard(this.editedCardIndex, newCard)
          } else {
            this.banlistService.addCard(newCard);
          }
      }
    )
    this.editMode = false
    form.reset();
  }

  onClear(){
    this.cardForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.banlistService.removeCard(this.editedCardIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
