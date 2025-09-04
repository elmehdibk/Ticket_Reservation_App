import { Component } from '@angular/core';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artists',
  standalone: false,
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss'
})
export class ArtistsComponent {
constructor(private artist:ArtistsService){}
artists:any[]=[];
login=false
ngOnInit(){
  this.artists=this.artist.artists;
  // console.log(this.artist);
   this.login=this.artist.isLogin();
    console.log(this.login);
  
}
counter:any=0;
count(id:number){
  this.counter=this.artist.counter.update(value=>value+=1);
  // console.log(this.counter);
  this.artist.add(id);
}
free(id:Number){
  this.artist.isfree(id);
}
}
