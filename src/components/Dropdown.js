const Dropdown = ({ time }) => {
    return (
        <div className="dropdown-container">
            <div className="dropdown">
                <p>Congrats!</p>
                <p>You found him in {time}</p>
            </div>
        </div>
    );
};

export default Dropdown;
