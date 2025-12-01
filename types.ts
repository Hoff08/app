export enum Screen {
  Welcome,
  Login,
  Explore,
  ExperienceDetail,
  Favorites,
  Trips,
  Booking,
  Reservation,
  Profile,
  Chat,
  Confirmation,
}

export interface Experience {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  photos: string[];
  price: number;
  rating: number;
  reviews: number;
  distance: number;
  description: string;
  amenities: string[];
}

export interface Trip {
  id:string;
  experience?: Experience;
  custom_destination?: string;
  custom_origin?: string;
  boat_type?: 'Lancha' | 'Veleiro';
  status: 'Confirmado' | 'Pendente';
  date?: string;
  // Campos para reserva detalhada
  bookingDate?: string;
  bookingTime?: string;
  people?: number;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface ChatMessage {
  sender: 'user' | 'mari';
  text: string;
  timestamp: number;
}