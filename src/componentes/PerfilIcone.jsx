import React from 'react';

const PerfilIcone = ({ width = 48, height = 48, color = 'currentColor', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
        stroke={color}
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zm-6 10c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4zm8-12h2m-1-1v2"
        />
    </svg>
);

export default PerfilIcone;