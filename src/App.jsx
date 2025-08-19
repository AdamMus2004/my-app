import './App.css'
import {useState} from "react";

function Welcome(props) {
    return <h1>Hej {props.name}👋</h1>;
}
function ExerciseNumber(props) {
    return <h1>Zadanie numer: {props.nr}</h1>;
}

function App(){
    const hobby = "programowanie";
    const [count, setCount] = useState(0);
    const tasks = ["Nauka Reacta", "Zrobić obiad", "Spacer"];
    const [showTasks, setShowTasks] = useState(true);
    return (
        <div>
            <ExerciseNumber nr={1}/>
            <Welcome name="Adam"/>
            <p>Moje hobby to {hobby}</p>
            <Welcome name="Kasia"/>
            <Welcome name="Tomek"/>
            <ExerciseNumber nr={2}/>
            <p>Kliknięto {count} razy</p>
            <button onClick={() => setCount(count + 1)}>Klikniej mnie!</button>
            <ul>
                <li>{tasks[0]}</li>
                <li>{tasks[1]}</li>
                <li>{tasks[2]}</li>
            </ul>
            <ul>
                {tasks.map((tasks, index) => <li key={index}>{tasks}</li>)}
            </ul>
            <ExerciseNumber nr={3}/>
            <button onClick={() => setShowTasks(!showTasks)}>{showTasks ? "Ukryj listę" : " Pokaż listę"}</button>
            {showTasks ? (
                <ul>
                    {tasks.map((task, index) =>
                        (<li key={index}>{task}</li>
                        ))}
                </ul>
            ) : (
                <p>Lista jest ukryta</p>
            )}

        </div>

    );
}

export default App;

