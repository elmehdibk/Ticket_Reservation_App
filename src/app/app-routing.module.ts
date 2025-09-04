import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistsComponent } from './artists/artists.component';
import { ShowComponent } from './show/show.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path:'',
    component:LoginComponent
  },
  {
    path:'artist',
    component:ArtistsComponent
  },
  {
    path:'artist/:id',
    component:ShowComponent
  },
  {
    path:'tickets',
    component:TicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
