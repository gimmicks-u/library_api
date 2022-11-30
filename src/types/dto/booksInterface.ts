export interface BooksInterface {
  id?: string;
  name: string;
  author: string;
  country: string;
  gender: string;
  year: number;
  ISBN: string;
  price: number | string;
  update_date?: string;
}
