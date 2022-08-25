export class User {
  public nick: string;
  public title: string;
  public points: number;

  constructor(nick: string, title: string, points: number) {
    this.nick = nick
    this.title = title
    this.points = points
  }
}
