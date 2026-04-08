import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [stage, setStage] = useState(1);
    const [players, setPlayers] = useState([]);
    const [result, setResult] = useState("");

    const addPlayerHandler = (name) => {
        setPlayers(prevState => ([
            ...prevState,
            name
        ]));
    };

    const removePlayerhandler = (idx) => {
        let newArray = [...players];
        newArray.splice(idx, 1);
        setPlayers(newArray);
    }

    const nextHandler = () => {
        if (players.length < 2) {
            toast.error("You need more than one player", {
                position: "top-left",
                autoClose: 2000
            });
        } else {
            setStage(2);
            setTimeout(() => {
                generateLoser();
            }, 2000);
        }
    }

    const generateLoser = () => {
        let result = players[Math.floor(Math.random() * players.length)];
        setResult(result);
    }

    const resetGameHandler = () => {
        setStage(1);
        setPlayers([]);
        setResult("");
    }

    return (
        <>
            <MyContext.Provider value={{
                stage: stage,
                players: players,
                result: result,
                addPlayer: addPlayerHandler,
                removePlayer: removePlayerhandler,
                next: nextHandler,
                generateNewLoser: generateLoser,
                resetGame: resetGameHandler
            }}>
                {children}
            </MyContext.Provider>
            <ToastContainer />
        </>
    );
};

export default MyProvider;