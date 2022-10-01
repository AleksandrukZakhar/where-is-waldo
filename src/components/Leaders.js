import { useCollection } from "react-firebase-hooks/firestore";

const Leaders = ({ collectionRef }) => {
    const [snapshot, loading, error] = useCollection(collectionRef);

    return (
        <div className="leaders-container">
            <div className="leaders">
                <h1>Leaders</h1>
                {error ? <p>Something went wrong</p> : null}
                {snapshot?.docs?.map((doc, index) => {
                    return (
                        <p key={Math.floor(Math.random() * 10000000)}>
                            {index}. {doc.data().nick} {doc.data().time}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default Leaders;
