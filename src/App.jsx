import { useState } from "react";
import { Header } from "./components/Header";
import styles from "./styles/App.module.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([{
    id: 1,
    description: "Comprar pão",
    isDone: false
  }]);

  function handleClick() {
    if (!inputValue) {
      alert("A tarefa precisa de uma descrição")
    }
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
          <button className={styles.addTask} onClick={handleClick}>
            <span>Cadastrar</span>
          </button>
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
