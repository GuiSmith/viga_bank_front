const ArrowRightIcone = ({ width = 24, height = 24, color = 'currentColor', ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M5 12h14" />
        <path d="M13 5l7 7-7 7" />
    </svg>
);

export default ArrowRightIcone;