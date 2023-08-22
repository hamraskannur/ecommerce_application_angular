export interface product {
  category: string
  description: string
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number};
  title: string
}


export interface ImagePair  { image: string; id: number };
