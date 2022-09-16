import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardAPIService {
  private cardsURL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?'

  constructor(private http: HttpClient) {}

  getCard(name: string){
    return this.http.get(this.cardsURL + 'name=' +name)
    .pipe(
      map(response => {
        let infoArray = Object.values(response);
        let info = infoArray[0]
        let i = info[0]
        return i
      }))
  }

}
