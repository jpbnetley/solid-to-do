import styles from './App.module.css';

import Todo from './components/todo'

function App() {
  return (
    <div class={styles.App}>
      <div class={styles.header}>
        <Todo />
      </div>
    </div>
  );
}

export default App;
