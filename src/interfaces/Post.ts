interface IAuthor {
  name: string;
  profilePicture: string;
}

interface ICategory {
  id: string;
  name: string;
}

export interface IPost {
  id: string;
  title: string;
  author: IAuthor;
  createdAt: string;
  thumbnail_url: string;
  content: string;
  categories?: ICategory[];
}
