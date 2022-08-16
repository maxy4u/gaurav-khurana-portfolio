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
  portfolio: { label: 'Portfolio', path: '/portfolio' },
  resume: { label: 'Resume', path: '/resume' },
};
