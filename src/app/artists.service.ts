import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() { 
   
    
  }

  artists=[
  {
    id: 1,
    name: "Taylor Swift",
    date: "2023-10-15",
    time: "19:30",
    photo: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop",
    price: 149.99
  },
  {
    id: 2,
    name: "Ed Sheeran",
    date: "2025-10-17",
    time: "20:00",
    photo: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&h=400&fit=crop",
    price: 129.99
  },
  {
    id: 3,
    name: "Beyoncé",
    date: "2025-10-20",
    time: "21:00",
    photo: "https://images.unsplash.com/photo-1756888008424-86ebdcb9d6a3?q=80&w=400&h=400&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 199.99
  },
  {
    id: 4,
    name: "The Weeknd",
    date: "2025-10-22",
    time: "19:00",
    photo: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop",
    price: 139.99
  },
  {
    id: 5,
    name: "Billie Eilish",
    date: "2025-10-25",
    time: "20:30",
    photo: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
    price: 119.99
  },
  {
    id: 6,
    name: "Drake",
    date: "2025-10-28",
    time: "22:00",
    photo: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop",
    price: 159.99
  },
  {
    id: 7,
    name: "Adele",
    date: "2025-10-30",
    time: "19:30",
    photo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    price: 179.99
  },
  {
    id: 8,
    name: "Coldplay",
    date: "2025-11-02",
    time: "20:00",
    photo: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=400&fit=crop",
    price: 134.99
  },
  {
    id: 9,
    name: "Bruno Mars",
    date: "2025-11-05",
    time: "21:30",
    photo: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop",
    price: 144.99
  },
  {
    id: 10,
    name: "Dua Lipa",
    date: "2025-11-08",
    time: "20:00",
    photo: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop",
    price: 109.99
  }
]

}
