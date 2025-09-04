import { computed, Injectable, signal} from '@angular/core';
import ArtistType from './artistType';



@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() { 
   
    
  }
 myArtist:ArtistType|undefined;
  artists:any[]=[
  {
    id: 1,
    name: "Taylor Swift",
    date: "2023-10-15",
    time: "19:30",
    photo: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop",
    price: 149.99,
    qt:1,
    total:0,
    free:false
  },
  {
    id: 2,
    name: "Ed Sheeran",
    date: "2025-10-17",
    time: "20:00",
    photo: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&h=400&fit=crop",
    price: 129.99,
    qt:1,
   total:0,
   free:false
  },
  {
    id: 3,
    name: "Beyoncé",
    date: "2025-10-20",
    time: "21:00",
    photo: "https://images.unsplash.com/photo-1756888008424-86ebdcb9d6a3?q=80&w=400&h=400&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 199.99,
    qt:1,
    total:0,
    free:false
  },
  {
    id: 4,
    name: "The Weeknd",
    date: "2025-10-22",
    time: "19:00",
    photo: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop",
    price: 139.99,
    qt:1,
    total:0,
    free:false
  },
  {
    id: 5,
    name: "Billie Eilish",
    date: "2025-10-25",
    time: "20:30",
    photo: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
    price: 119.99,
    qt:1,
    total:0,
    free:false
  },
  {
    id: 6,
    name: "Drake",
    date: "2025-10-28",
    time: "22:00",
    photo: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop",
    price: 159.99,
    qt:1,
    total:0,
    free:false
  },
  {
    id: 7,
    name: "Adele",
    date: "2025-10-30",
    time: "19:30",
    photo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    price: 179.99,
    qt:1,
    total:0,
    free:false
  },
  {
    id: 8,
    name: "Coldplay",
    date: "2025-11-02",
    time: "20:00",
    photo: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=400&fit=crop",
    price: 134.99,
    qt:1,
    total:0,
    free:false
  },
  {
    id: 9,
    name: "Bruno Mars",
    date: "2025-11-05",
    time: "21:30",
    photo: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop",
    price: 144.99,
    qt:1,
    total:0,
    free:false
  },
  {
    id: 10,
    name: "Dua Lipa",
    date: "2025-11-08",
    time: "20:00",
    photo: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop",
    price: 109.99,
    qt:1,
    total:0,
    free:false
  }
]
getArtist(id:Number){
  return this.myArtist=this.artists.find(e=>e.id===id)
}
counter=signal(0);
// iscount=computed(()=>this.counter+=1);
isLogin=signal(false);
tikets:ArtistType[]=[];

add(value: Number) {
  const ticket = this.artists.find((e) => e.id === value);  
  if (ticket) {
    const check= this.tikets.filter(e=>e.id===value);
    if(check.length<1){
      this.tikets = [...this.tikets, ticket];
    }
      // this.toastr.success('is Added', 'ADD TO BASKET!');

    else{
      const qt =this.tikets.find(e=>e.id===value);
      qt!.qt+=1
      // this.toastr.success('+1','ADD TO BASKET!');
    }
  }
  
  
  
  // login=computed(()=>{this.isLogin})
}
isfree(id:Number){
  const ticket = this.artists.find((e) => e.id === id);  
  if (ticket) {
    const check= this.tikets.filter(e=>e.id===id);
    if(check.length<1){
      this.tikets = [...this.tikets, ticket];
    }
      // this.toastr.success('is Added', 'ADD TO BASKET!');
      
      else{
        const qt =this.tikets.find(e=>e.id===id);
      qt!.qt+=1
      // this.toastr.success('+1','ADD TO BASKET!');
    }
    const free =this.tikets.find(e=>e.id===id);
    free!.free=true;
    console.log(free?.free);
  
}

}
}
