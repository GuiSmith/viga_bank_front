const Titulo = ({ texto }) => {
    return (
        <h4 className="text-center fw-bold mb-2" style={{ color: "#212529" }}>
            {texto}
        </h4>
    );
};

export default Titulo;