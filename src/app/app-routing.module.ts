import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanlistCustomComponent } from './banlist/banlist-custom/banlist-custom.component';
import { BanlistMergedComponent } from './banlist/banlist-merged/banlist-merged.component';
import { BanlistOfficialComponent } from './banlist/banlist-official/banlist-official.component';
import { BanlistComponent } from './banlist/banlist.component';
import { CardBaseComponent } from './card-base/card-base.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { UsersStartComponent } from './users/users-start/users-start.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/banlist', pathMatch: 'full'},
  { path: 'banlist', component: BanlistComponent, children: [
    { path: '', redirectTo: 'custom', pathMatch: 'full'},
    { path: 'custom', component: BanlistCustomComponent},
    { path: 'merged', component: BanlistMergedComponent},
    { path: 'official', component: BanlistOfficialComponent}
  ]},
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UsersStartComponent},
    { path: ':id', component: UsersDetailComponent}
  ]},
  { path: 'card-base', component: CardBaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
