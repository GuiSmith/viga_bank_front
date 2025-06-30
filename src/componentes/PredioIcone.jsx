import React from 'react';

const PredioIcone = ({ width = 24, height = 32, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        {...props}
    >
        {/* Corpo do prédio mais arredondado */}
        <rect x="5" y="4" width="14" height="24" rx="5" ry="5" fill="#555" />
        {/* Janelas ajustadas */}
        <rect x="8" y="8" width="3" height="3" rx="1" fill="#fff" />
        <rect x="13" y="8" width="3" height="3" rx="1" fill="#fff" />
        <rect x="8" y="13" width="3" height="3" rx="1" fill="#fff" />
        <rect x="13" y="13" width="3" height="3" rx="1" fill="#fff" />
        <rect x="8" y="18" width="3" height="3" rx="1" fill="#fff" />
        <rect x="13" y="18" width="3" height="3" rx="1" fill="#fff" />
        {/* Porta arredondada */}
        <rect x="10" y="23" width="4" height="5" rx="1.5" fill="#fff" />
    </svg>
);

export default PredioIcone;