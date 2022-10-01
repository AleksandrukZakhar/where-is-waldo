import { useState } from "react";
import { addDoc } from "firebase/firestore";

const Dropdown = ({ time, ftime, collectionRef, setShow, setShowLeaders }) => {
    const [nick, setNick] = useState();

    return (
        <div className="dropdown-container">
            <div className="dropdown">
                <p>Congrats!</p>
                <p>You found him in {ftime}</p>
                <input
                    type="text"
                    placeholder="Enter your nick"
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
                />
                <button
                    onClick={async () => {
                        await addDoc(collectionRef, {
                            nick,
                            time,
                        });

                        setShowLeaders(true);
                        setShow(false);
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Dropdown;
