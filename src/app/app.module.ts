import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BanlistComponent } from './banlist/banlist.component';
import { UsersComponent } from './users/users.component';
import { CardBaseComponent } from './card-base/card-base.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { BanlistEditComponent } from './banlist/banlist-edit/banlist-edit.component';
import { UsersStartComponent } from './users/users-start/users-start.component';
import { FormsModule } from '@angular/forms';
import { BanlistCustomComponent } from './banlist/banlist-custom/banlist-custom.component';
import { BanlistMergedComponent } from './banlist/banlist-merged/banlist-merged.component';
import { BanlistOfficialComponent } from './banlist/banlist-official/banlist-official.component';
import { BanlistListComponent } from './banlist/banlist-list/banlist-list.component';
import { SortNamePipe } from './shared/sort-name.pipe';

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
    BanlistCustomComponent,
    BanlistMergedComponent,
    BanlistOfficialComponent,
    BanlistListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SortNamePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
