import { Injectable } from "@angular/core";
import { User } from "../user.model";

@Injectable({
  providedIn:'root'
})
export class UserService {
  public users: User[] = [
    new User('Kub', 'King of Ducks', 26),
    new User('Rof', 'First half of Glackip',37),
    new User('Klimuk', 'Avarage Monster Enojoyer',43),
    new User('Pefau', 'Typical Geckon Fan',12),
    new User('PwneD', 'Second half of Glackip',47),
    new User('Gilvian', 'Monke',20)
  ]

  getUser(index: number){
    return this.users[index];
  }
}
