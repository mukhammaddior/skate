export interface NavLink {
  name: string;
  href: string;
}

export interface InstaImage {
  id: number;
  src: string;
}

export interface Blog {
  id: number;
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
}

export interface BrandRow {
  row1: string[];
  row2: string[];
}
