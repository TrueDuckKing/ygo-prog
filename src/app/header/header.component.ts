import { Component, OnInit } from '@angular/core';
import { CardAPI } from '../shared/card-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cardApi: CardAPI) { }

  ngOnInit(): void {
  }
  //--testing api fetching--
  // fetchData(){
  //   fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }

  //--testing api service fetching--
  //  fetchCard(){
  //   this.cardApi.getCard('Dark Magician').subscribe(info =>
  //     console.log(info)
  //     )
  //  }
}
