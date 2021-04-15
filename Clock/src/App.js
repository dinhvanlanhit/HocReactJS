
import Clock from './components/clock'
import Todo from './components/todo'
import Task from './components/task'

function App() {

  return (
    <div className="container">
        <hr></hr>
        <Task/>
        <hr></hr>
        <Todo/>
        <Clock />
    </div>
  );
}

export default App;
