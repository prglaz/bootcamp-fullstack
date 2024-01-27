import { useState } from "react";
import "./app.scss";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const App = () => {
    const [tasks, setTasks] = useState([
        // { id: 1, text: "Tarea 1" },
        // { id: 2, text: "Tarea 2" },
        // { id: 3, text: "Tarea 3" },
    ]);




    return (
        <div>
            <h1>Lista de Tareas</h1>
            <TaskForm tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default App;