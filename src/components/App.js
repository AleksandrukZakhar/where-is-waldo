import { useState, useEffect } from "react";
import Background from "../assets/background.png";
import Waldo from "../assets/waldo.png";

const App = () => {
    const [found, setFound] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (!found) {
            setTimeout(() => {
                setTime((prev) => prev + 1);
            }, [1000]);
        }
    });

    return (
        <>
            <img src={Background} id="background" alt="background" />{" "}
            <img
                src={Waldo}
                id="waldo"
                alt="waldo"
                onClick={() => setFound(true)}
            />
        </>
    );
};

export default App;
