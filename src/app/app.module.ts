import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BanlistComponent } from './banlist/banlist.component';
import { CardsService } from './banlist/cards.service';
import { UsersComponent } from './users/users.component';
import { CardBaseComponent } from './card-base/card-base.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { BanlistEditComponent } from './banlist/banlist-edit/banlist-edit.component';
import { UserService } from './users/users-list/users-list.service';
import { UsersStartComponent } from './users/users-start/users-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BanlistComponent,
    UsersComponent,
    CardBaseComponent,
    DropdownDirective,
    UsersListComponent,
    UsersDetailComponent,
    BanlistEditComponent,
    UsersStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CardsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
