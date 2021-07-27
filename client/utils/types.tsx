export interface IPost {
  _id?: string;
  publishedAt?: string;
  title?: string;
  imageUrl?: string;
  excerpt?: string;
  slug?: string;
  body?: string;
}

export type IPostArray = IPost[];
