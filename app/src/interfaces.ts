export interface IBlog {
  id?: number;
  _id?: string;
  title: string;
  content: string;
  description: string;
  imageSrc?: string;
  comments?: Array<IComment>;
  keywords: Array<string>;
}

export interface IComment {
  name: string;
  comment: string;
}

export interface IContact {
  name: string;
  email: string;
  number: string;
  message: string;
}

export interface IFeature {
  img: string;
  heading: string;
  text: string;
}

export interface IButton {
  text: string;
}

export interface IBlogProps {
  id: any;
  imgSrc: string;
  title: string;
  description: string;
  keywords: Array<string>;
}
