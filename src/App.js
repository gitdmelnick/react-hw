import { useRef, useState } from 'react';
import DummyComponent from './components/DummyComponent';
import MyPureComponent from './components/MyPureComponent';
import './styles/App.css';

function App() {

  const [isDisabled, setIsDisabled] = useState(false);
  const inputRef = useRef();

  function handleInput() {
    inputRef.current.value.toLowerCase() === 'react' ? setIsDisabled(true) : setIsDisabled(false);
  }

  function handleFocusClick() {
    inputRef.current.focus();
  }

  return (
    
    <div className="App">
      <DummyComponent/>

      <input type="text" ref={inputRef} onChange={handleInput}></input>
      <button disabled={isDisabled}>Disable Me!</button>
      <button onClick={handleFocusClick}>Now Focus</button>
      <MyPureComponent shouldChange={true}/>
    </div>
  );
}

export default App;
