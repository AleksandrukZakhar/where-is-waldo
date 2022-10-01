import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import Background from "../assets/background.png";
import Waldo from "../assets/waldo.png";
import Dropdown from "./Dropdown.js";
import Leaders from "./Leaders.js";

const app = initializeApp({
    apiKey: "AIzaSyCQyGRQgJdEfuViG-sSVnSvbX7DeUZ_vDU",
    authDomain: "where-is-waldo-305ad.firebaseapp.com",
    projectId: "where-is-waldo-305ad",
    storageBucket: "where-is-waldo-305ad.appspot.com",
    messagingSenderId: "1046645784974",
    appId: "1:1046645784974:web:d05140bba3f8dc2896e4df",
});
const db = getFirestore(app);
const collectionRef = collection(db, "users");

const App = () => {
    const [found, setFound] = useState(false);
    const [time, setTime] = useState(0);
    const [show, setShow] = useState(false);
    const [showLeaders, setShowLeaders] = useState(false);

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

    useEffect(() => {
        setShow(found);
    }, [found]);

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
            {show ? (
                <Dropdown
                    time={time}
                    ftime={toHHMMSS(time)}
                    collectionRef={collectionRef}
                    setShow={setShow}
                    setShowLeaders={setShowLeaders}
                />
            ) : null}
            {showLeaders ? <Leaders collectionRef={collectionRef} /> : null}
        </>
    );
};

export default App;
