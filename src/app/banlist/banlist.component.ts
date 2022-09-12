import { Component, OnInit } from '@angular/core';
import { BanlistCustom } from './banlist-custom/banlist-custom.service';
import { BanlistOfficial } from './banlist-official/banlist-official.service';
@Component({
  selector: 'app-banlist',
  templateUrl: './banlist.component.html',
  styleUrls: ['./banlist.component.css']
})
export class BanlistComponent implements OnInit {
  constructor(private banlistCutom: BanlistCustom, private banlistOfficial: BanlistOfficial){}

  ngOnInit(): void {
    this.banlistCutom.fetchCards();
    this.banlistOfficial.fetchCards();
  }
}
