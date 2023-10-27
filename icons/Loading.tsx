import { memo, FC } from 'react';

export type TLoading = {
  bgColor: string;
};

const Loading: FC<TLoading> = ({ bgColor }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlSpace='preserve'
    viewBox='0 0 100 100'
    style={{ margin: 'auto', fill: bgColor, display: 'block', fillOpacity: 1 }}
    width='100px'
    height='100px'
    preserveAspectRatio='xMidYMid'
  >
    <g className='ldl-scale' style={{ transformOrigin: '50% 50%', transform: 'rotate(0deg) scale(0.8, 0.8)' }}>
      <g className='ldl-ani'>
        <g className='ldl-layer'>
          <g
            className='ldl-ani'
            style={{
              transformOrigin: '50px 50px',
              transform: 'matrix(1, 0, 0, 1, 0, 0)',
              animation:
                '1.11111s linear -0.694444s infinite normal forwards running bounce-3eb14bad-9df8-4a15-a6af-0b8051dad5f9'
            }}
          >
            <circle fill='#d65a62' r='6.5' cy='76.5' cx='18' style={{ fill: 'rgb(214, 90, 98)' }}></circle>
          </g>
        </g>
        <g className='ldl-layer'>
          <g
            className='ldl-ani'
            style={{
              transformOrigin: '50px 50px',
              transform: 'matrix(1, 0, 0, 1, 0, 0)',
              animation:
                '1.11111s linear -0.833333s infinite normal forwards running bounce-3eb14bad-9df8-4a15-a6af-0b8051dad5f9'
            }}
          >
            <circle fill='#ea7c60' r='6.5' cy='76.5' cx='39.3' style={{ fill: 'rgb(234, 124, 96)' }}></circle>
          </g>
        </g>
        <g className='ldl-layer'>
          <g
            className='ldl-ani'
            style={{
              transformOrigin: '50px 50px',
              transform: 'matrix(1, 0, 0, 1, 0, 0)',
              animation:
                '1.11111s linear -0.972222s infinite normal forwards running bounce-3eb14bad-9df8-4a15-a6af-0b8051dad5f9'
            }}
          >
            <circle fill='#f0af6b' r='6.5' cy='76.5' cx='60.7' style={{ fill: 'rgb(240, 175, 107)' }}></circle>
          </g>
        </g>
        <g className='ldl-layer'>
          <g
            className='ldl-ani'
            style={{
              transformOrigin: '50px 50px',
              transform: 'matrix(1, 0, 0, 1, 0, 0)',
              animation:
                '1.11111s linear -1.11111s infinite normal forwards running bounce-3eb14bad-9df8-4a15-a6af-0b8051dad5f9'
            }}
          >
            <circle fill='#a8b980' r='6.5' cy='76.5' cx='82' style={{ fill: 'rgb(168, 185, 128)' }}></circle>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default memo(Loading);
