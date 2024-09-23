export interface IExperience {
  title: string;
  date: string;
  description: string[];
  techStack: string[];
  imageUrls: IImageData[];
}

export interface IImageData {
  src: string;
  alt: string;
  description: string;
}
