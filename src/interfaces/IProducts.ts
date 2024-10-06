export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    color: string | null;
    tags: string[];
    categories: string[];
  }

  export interface IColumn {
    key: string;
    label: string;
  }
  
  