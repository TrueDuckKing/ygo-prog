export class Card {
  constructor(public status: string,
              public name: string,
              public type: string,
              public desc?: string,
              public atk?: number,
              public def?: number ,
              public level?: number,
              public race?: string,
              public attribute?: string,
              public was?: string,
              public id?:number)  {
    this.status = status
    this.name = name
    this.type = type
    this.desc = desc
    this.atk = atk
    this.def = def
    this.level = level
    this.race = race
    this.attribute = attribute
    this.was = was
    this.id = id
  }
}
