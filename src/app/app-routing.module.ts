import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  {path:'',
    component:LoginComponent
  },
  {
    path:'artist',
    component:ArtistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
