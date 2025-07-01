import React from 'react';

const CobrancasIcone = ({ size = 32, color = 'currentColor', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        {...props}
    >
        <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="22" // Aumentado de 18 para 22
            fontFamily="sans-serif"
            fill={color}
        >
            $
        </text>
    </svg>
);

export default CobrancasIcone;