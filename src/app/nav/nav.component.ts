import { Component } from '@angular/core';
import { ArtistsComponent } from '../artists/artists.component';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
constructor(public artist:ArtistsService){}
// counter:number=0;
// ngOnInit(){
//   this.counter=this.artist.counter()
//   console.log(this.counter);
  
// }
}
