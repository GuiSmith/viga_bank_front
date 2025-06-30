const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="form-label fw-semibold">
        {children}
    </label>
);

export default Label;