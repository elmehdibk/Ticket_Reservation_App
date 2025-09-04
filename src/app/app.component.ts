import { Component } from '@angular/core';
import { ArtistsService } from './artists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ticket_Reservation_App';
  constructor(public artist:ArtistsService){}
  login:any=false;
  ngOnInit(){
    this.login=this.artist.isLogin();
    console.log(this.login); 
  }
}
