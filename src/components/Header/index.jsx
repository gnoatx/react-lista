import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1 className={styles.focus}>aFazer</h1>
        <strong className={styles.focus}>Transforme suas listas em conquistas: <br className={styles.subtitleBreak}/>organize, priorize e realize!</strong>
      </div>
    </header>
  )
}