import { useCollection } from "react-firebase-hooks/firestore";

const Leaders = ({ collectionRef, toHHMMSS }) => {
    const [snapshot, loading, error] = useCollection(collectionRef);

    return (
        <div className="leaders-container">
            <div className="leaders">
                <h1>Leaders</h1>
                {error ? <p>Something went wrong</p> : null}
                {snapshot?.docs
                    ?.map((doc) => {
                        const { nick, time } = doc.data();

                        return { nick, time };
                    })
                    .sort((a, b) => {
                        return a.time - b.time;
                    })
                    .filter((value, index) => {
                        return index < 10;
                    })
                    .map((user, index) => {
                        const { nick, time } = user;

                        return (
                            <p key={Math.floor(Math.random() * 100000)}>
                                {index + 1}. {nick} {toHHMMSS(time)}{" "}
                            </p>
                        );
                    })}
            </div>
        </div>
    );
};

export default Leaders;
