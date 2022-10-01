import { useState, useEffect } from "react";
import Background from "../assets/background.png";
import Waldo from "../assets/waldo.png";
import Dropdown from "./Dropdown";

const App = () => {
    const [found, setFound] = useState(false);
    const [time, setTime] = useState(0);

    const toHHMMSS = (num) => {
        const sec_num = parseInt(num, 10);
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - hours * 3600) / 60);
        let seconds = sec_num - hours * 3600 - minutes * 60;

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hours + ":" + minutes + ":" + seconds;
    };

    useEffect(() => {
        if (!found) {
            setTimeout(() => {
                setTime((prev) => prev + 1);
            }, [1000]);
        }
    });

    return (
        <>
            <header>
                <div className="container">
                    <h1>Find Waldo!</h1>
                    <p>{toHHMMSS(time)}</p>
                </div>
            </header>
            <img src={Background} id="background" alt="background" />
            <img
                src={Waldo}
                id="waldo"
                alt="waldo"
                onClick={() => setFound(true)}
            />
            {found ? <Dropdown time={toHHMMSS(time)} /> : null}
        </>
    );
};

export default App;
