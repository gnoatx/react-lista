import styles from './button.module.css'

// function handleClick() {
//   if () {
//     alert("A tarefa precisa de uma descrição")
//   }
// }

export function Button({onClick}) {
  return (
    <button className={styles.addTask} onClick={onClick}>
      <span>Cadastrar</span>
    </button>
  )
}