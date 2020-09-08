export interface Category {
  id: number;
  name: string;
  parentCategoryId: number;
}

export interface Transaction {
  date: string;
  payee: string;
  category: string;
  amount: number;
  memo: any;
  isCleared: boolean;
}

