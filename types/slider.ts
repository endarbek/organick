import { StrapiResponse } from ".";
export interface ISliders {
  id: number;
  description: string;
  author: string;
  consumer: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}
export type SlidersResponse = StrapiResponse<ISliders[]>;
