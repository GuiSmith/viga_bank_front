import React from 'react';

const ChaveIcone = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx={15} cy={33} r={5} />
        <path d="M18 30 L38 10 L42 14 L39 17 L41 19 L38 22 L36 20 L33 23 L30 20" />
    </svg>
);

export default ChaveIcone;