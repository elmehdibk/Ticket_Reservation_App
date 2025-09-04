import { Component } from '@angular/core';
import { ArtistsService } from '../artists.service';
import ArtistType from '../artistType';

@Component({
  selector: 'app-tickets',
  standalone: false,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
  constructor(private artist:ArtistsService){}
  tikets:ArtistType[]=[]
  ngOnInit(){
    this.tikets=this.artist.tikets;
  }
}
