import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BanlistService } from './banlist.service';
@Component({
  selector: 'app-banlist',
  templateUrl: './banlist.component.html',
  styleUrls: ['./banlist.component.css']
})
export class BanlistComponent implements OnInit{
  constructor(private banlistService: BanlistService){}

  ngOnInit(): void {
    if(this.banlistService.getAllCards().length === 0){
      this.banlistService.fetchCards()
    }
  }
}
