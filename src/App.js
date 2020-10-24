import logo from './logo.svg';
import Greet from './components/Greet'
import Message from './components/Message'
import './App.css';
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import NameList from './components/NameList'
function App() {
  return (
    <div className="App">
        {/* <Greet name='Lord RDB'>
          <button>Hello</button>
        </Greet>
        <Greet name='Lord Pokedrax'/>
        <Greet name='Bro'/> */}
        {/* <Welcome name='Lord RDB'>
          <button>Hello</button>
        </Welcome>
        <Welcome name='Lord Pokedrax'/>
        <Welcome name='Bro'/> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        <NameList/>
    </div>
  );
}

export default App;
