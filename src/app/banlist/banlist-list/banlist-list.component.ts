import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banlist-list',
  templateUrl: './banlist-list.component.html',
  styleUrls: ['./banlist-list.component.css']
})
export class BanlistListComponent{
  @Output() infoEditableEvent = new EventEmitter

  editInfo(value: string){
    if(value = 'editable'){
      this.infoEditableEvent.emit(true)
    } else {
      this.infoEditableEvent.emit(false)
    }
  }
}
