import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from '../artists.service';
import ArtistType from '../artistType';


@Component({
  selector: 'app-show',
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  constructor(private artist:ActivatedRoute,private artists:ArtistsService){}

  id:number=0;
  artist$?:ArtistType;
 
  ngOnInit(){
    this.id=Number(this.artist.snapshot.paramMap.get('id'));
    // console.log(typeof(this.displaArtist));
    this.artist$= this.artists.getArtist(this.id);
    console.log(this.artist$);
    
    
    //  this.artist$.map(e=>=this.artist$=e);
    //  this.artist$.map();
     
    
  }

  add(id:Number){
    this.artists.add(id);
  }

  
}
