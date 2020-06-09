import React from 'react'

export default function Logo({ fill }) {
  return (
    <svg viewBox="0 0 508.475 452.978" style={{width: 'var(--logo-width)'}}>
      <rect y="-281" x="-131.6" height="119" width="607" fill="none"/>
      <g style={{ fill: fill || 'var(--logo-fill)' }}>
        <path d="m20.36 404.18c20.75-1.522 37.956-7.088 48.58-19.232 12.148-13.666 17.207-32.894 17.207-91.596v-205.96h44.535v223.17c0 47.57-7.591 78.438-29.354 100.71-19.735 19.732-52.123 27.831-75.907 27.831l-5.063-34.92z"/>
        <path d="m187.05 87.216l32.837 124.27c6.57 27.3 13.1 52.5 17.7 77.797h1.514c5.556-24.753 13.64-51.023 21.724-77.29l39.909-124.78h37.379l37.887 122.25c9.092 29.3 16.2 55.1 21.7 79.814h1.514c4.041-24.753 10.605-50.516 18.691-79.311l34.857-122.76h43.943l-78.801 244.5h-40.416l-37.379-116.69c-8.592-27.281-15.662-51.526-21.725-80.321h-1.008c-6.062 29.298-13.641 54.558-22.23 80.825l-39.39 116.2h-40.415l-73.76-244.5h45.47z"/>
        <rect y="12.8" x="85.1" height="44.6" width="44.6"/>
      </g>
      <rect y="-134.6" x="531.6" height="23.6" width="355.1"/>
    </svg>
  )
}
