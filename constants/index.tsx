export interface TPath {
  label: string;
  path: string;
}

export type Tnavigation<TObj> = {
  home: TObj;
  github: TObj;
  portfolio: TObj;
  resume: TObj;
};

export const navigation: Tnavigation<TPath> = {
  home: { label: 'Home', path: '/' },
  github: { label: 'GitHub', path: '/github' },
  portfolio: { label: 'Gallery', path: '/gallery' },
  resume: { label: 'Resume', path: '/resume' },
};

export const cards = [
  {
    index: 0,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-1.png"
  },
  {
    index: 1,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-2.png"
  },
  {
    index: 2,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-3.png"
  },
  {
    index: 3,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-4.png"
  },
  {
    index: 4,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-5.png"
  },
  {
    index: 5,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-6.png"
  },
  {
    index: 6,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-7.png"
  },
  {
    index: 7,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-8.png"
  },
  {
    index: 8,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-9.png"
  },
  {
    index: 9,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-10.png"
  },
  {
    index: 10,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-11.png"
  },
  {
    index: 11,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-12.png"
  },
  {
    index: 12,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-13.png"
  },
  {
    index: 13,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-4.png"
  },
  {
    index: 14,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-14.png"
  },
  {
    index: 15,
    headline: "NextJs",
    src: "/images/gallery/ea-cn-15.png"
  },
  {
    index: 16,
    headline: "ReactJs",
    src: "/images/gallery/copart-1.png"
  },
  {
    index: 17,
    headline: "ReactJs",
    src: "/images/gallery/copart-2.png"
  },
  {
    index: 18,
    headline: "ReactJs",
    src: "/images/gallery/copart-3.png"
  },
  {
    index: 19,
    headline: "ReactJs",
    src: "/images/gallery/copart-4.png"
  },
  {
    index: 20,
    headline: "ReactJs",
    src: "/images/gallery/copart-5.png"
  },
  {
    index: 21,
    headline: "ReactJs",
    src: "/images/gallery/copart-6.png"
  },
  {
    index: 22,
    headline: "ReactJs",
    src: "/images/gallery/copart-7.png"
  },
  {
    index: 23,
    headline: "ReactJs",
    src: "/images/gallery/copart-8.png"
  },
  {
    index: 24,
    headline: "ReactJs",
    src: "/images/gallery/copart-9.png"
  },
  {
    index: 25,
    headline: "ReactJs",
    src: "/images/gallery/copart-10.png"
  },
  {
    index: 26,
    headline: "ReactJs",
    src: "/images/gallery/copart-11.png"
  },
  {
    index: 27,
    headline: "AngularJs",
    src: "/images/gallery/amp-1.png"
  },
  {
    index: 28,
    headline: "AngularJs",
    src: "/images/gallery/amp-2.png"
  },
  {
    index: 29,
    headline: "AngularJs",
    src: "/images/gallery/amp-3.png"
  },
  {
    index: 30,
    headline: "AngularJs",
    src: "/images/gallery/amp-4.png"
  },
  {
    index: 31,
    headline: "AngularJs",
    src: "/images/gallery/amp-5.png"
  }
];
