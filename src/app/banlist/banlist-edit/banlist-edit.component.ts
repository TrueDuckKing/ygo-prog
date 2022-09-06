import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CardAPI } from 'src/app/shared/card-api.service';
import { Card } from 'src/app/shared/card.model';
import { BanlistCustom } from '../banlist-custom/banlist-custom.service';

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

  constructor(private cardApi: CardAPI, private banlistCustom: BanlistCustom) { }

  ngOnInit(){
    this.subscription = this.banlistCustom.startedEditing.subscribe(
      (index: number) => {
        this.editedCardIndex = index;
        this.editMode = true;
        this.editedCard = this.banlistCustom.getCard(index);
        this.cardForm.setValue({
          name: this.editedCard.name,
          status: this.editedCard.status
        });
      }
      );
  }


  //Trying to fix this
  onAddCard(form: NgForm) {
    const value = form.value;
    let newInfo;
    this.cardApi.getCard(value.name)
      .subscribe(
        i => {
          console.log(i);
          newInfo = i;
      }
    )
    console.log(newInfo)
    const newCard = new Card(value.status, value.name, '');
    if(this.editMode) {
      this.banlistCustom.updateCard(this.editedCardIndex, newCard)
    } else {
      this.banlistCustom.addCard(newCard);
    }
      this.editMode = false
    form.reset();
  }

  onClear(){
    this.cardForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.banlistCustom.removeCard(this.editedCardIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
