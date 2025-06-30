const Label = ({ htmlFor, children }) => (
    <label
        htmlFor={htmlFor}
        className="form-label fw-semibold"
        style={{ fontSize: '75%' }}
    >
        {children}
    </label>
);

export default Label;