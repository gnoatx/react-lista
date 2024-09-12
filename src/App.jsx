import { useState } from "react";
import { Header } from "./components/Header";
import styles from "./styles/App.module.css";
import { Button } from "./components/Button";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([
    {
      description: "Comprar pão",
      isDone: false
    },
  ]);

  function handleClick() {
    if (!inputValue) {
      alert("A tarefa não pode estar vazia.")
    }

    const newTask = {
      description: inputValue,
      isDone: false,
    }

    setTasks((prevState) => [...prevState, newTask])

    setInputValue('')
  }

  

  return (
    <div>
      <Header></Header>
      <main className={styles.container}>
        <section className={styles.inputField}>
          <div className={styles.animationBg}>
            Lavar a louça
            <input
              type="text"
              className={styles.taskAdder}
              placeholder="Lavar a louça"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </div>
          <Button onClick={handleClick}></Button>
        </section>
        {tasks.length === 0 && <p>Sem tarefas</p>}

        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <strong>{task.description}</strong>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
