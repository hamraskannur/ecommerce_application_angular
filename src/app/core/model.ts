export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  quantity?:number
  addedToCart?:boolean
}

export interface User {
  createdAt: string;
  email: string;
  password: string;
  username:string;
  _id: string;
}

export interface ImagePair {
  image: string;
  id: number;
}
