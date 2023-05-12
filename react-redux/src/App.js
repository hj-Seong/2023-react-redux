import logo from './logo.svg';
import './App.css';
import CounterBox from './components/CounterBox';
import ExConterBox from './components/ExConterBox';
import CounterNumber from './components/CounterNumber';
import MemoComp from './components/MemoComp';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <ExConterBox />
      <CounterNumber />
      <MemoComp />
    </div>
  );
}

export default App;
