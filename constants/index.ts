export interface TPath {
  label: string;
  path: string;
}

export type Tnavigation<TObj> = {
  home: TObj;
  github: TObj;
  gallery: TObj;
  resume: TObj;
};

export type TCard = {
  index: number;
  headline: string;
  src: string;
};

export type TCards = TCard[];

export const navigation: Tnavigation<TPath> = {
  home: { label: 'Home', path: '/' },
  github: { label: 'GitHub', path: '/github' },
  gallery: { label: 'Gallery', path: '/gallery' },
  resume: { label: 'Resume', path: '/resume' }
};

export enum ActionTypes {
  CHANGE_THEME = 'CHANGE_THEME'
}

export const cards: TCards = [
  {
    index: 0,
    headline: 'Graphql, ReactJs, Nodejs, TypeScript, Aws AppSync',
    src: '/images/gallery/pc-1.png'
  },
  {
    index: 1,
    headline: 'Graphql, ReactJs, Nodejs, TypeScript, Aws AppSync',
    src: '/images/gallery/pc-2.png'
  },
  {
    index: 2,
    headline: 'Graphql, ReactJs, Nodejs, TypeScript, Aws AppSync',
    src: '/images/gallery/pc-3.png'
  },
  {
    index: 3,
    headline: 'Graphql, ReactJs, Nodejs, TypeScript, Aws AppSync',
    src: '/images/gallery/pc-4.png'
  },
  {
    index: 4,
    headline: 'Graphql, ReactJs, Nodejs, TypeScript, Aws AppSync',
    src: '/images/gallery/pc-5.png'
  },
  {
    index: 5,
    headline: 'Graphql, ReactJs, Nodejs, TypeScript, Aws AppSync',
    src: '/images/gallery/pc-6.png'
  },
  {
    index: 6,
    headline: 'Graphql, ReactJs, Nodejs, TypeScript, Aws AppSync',
    src: '/images/gallery/pc-7.png'
  },
  {
    index: 7,
    headline: 'Graphql, ReactJs, Nodejs, TypeScript, Aws AppSync',
    src: '/images/gallery/pc-8.png'
  },
  {
    index: 8,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-1.png'
  },
  {
    index: 9,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-2.png'
  },
  {
    index: 10,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-3.png'
  },
  {
    index: 11,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-4.png'
  },
  {
    index: 12,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-5.png'
  },
  {
    index: 13,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-6.png'
  },
  {
    index: 14,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-7.png'
  },
  {
    index: 15,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-8.png'
  },
  {
    index: 16,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-9.png'
  },
  {
    index: 17,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-10.png'
  },
  {
    index: 18,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-11.png'
  },
  {
    index: 19,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-12.png'
  },
  {
    index: 20,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-13.png'
  },
  {
    index: 21,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-4.png'
  },
  {
    index: 22,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-14.png'
  },
  {
    index: 23,
    headline: 'NextJs, ReactJs, Nodejs, TypeScript',
    src: '/images/gallery/ea-cn-15.png'
  },
  {
    index: 24,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-1.png'
  },
  {
    index: 25,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-2.png'
  },
  {
    index: 26,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-3.png'
  },
  {
    index: 27,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-4.png'
  },
  {
    index: 28,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-5.png'
  },
  {
    index: 29,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-6.png'
  },
  {
    index: 30,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-7.png'
  },
  {
    index: 31,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-8.png'
  },
  {
    index: 32,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-9.png'
  },
  {
    index: 33,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-10.png'
  },
  {
    index: 34,
    headline: 'ReactJs, Redux, Nodejs, RamdaJs',
    src: '/images/gallery/copart-11.png'
  },
  {
    index: 35,
    headline: 'Javascript, Browser Extension',
    src: '/images/gallery/amp-1.png'
  },
  {
    index: 36,
    headline: 'Javascript, Browser Extension',
    src: '/images/gallery/amp-2.png'
  },
  {
    index: 37,
    headline: 'Javascript, Browser Extension',
    src: '/images/gallery/amp-3.png'
  },
  {
    index: 38,
    headline: 'AngularJs, Nodejs',
    src: '/images/gallery/amp-4.png'
  },
  {
    index: 39,
    headline: 'AngularJs, Nodejs',
    src: '/images/gallery/amp-5.png'
  }
];
