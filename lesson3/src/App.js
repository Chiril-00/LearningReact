import './App.css';
import Counter from './components/Counter';
import { FUnctionalCounter } from './components/FUnctionalCounter';
import sum, { sum2, sum3 } from './utils/sum';

function App() {

  return (
    <div className="App">
      <h1>Lesson3</h1>
      <Counter initialValue = {0} />
      <Counter initialValue = {sum2(99, 4)} />
      <FUnctionalCounter initialValue ={999} />
    </div>
  );
}

export default App;
