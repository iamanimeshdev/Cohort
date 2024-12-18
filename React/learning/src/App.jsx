import { useState } from 'react';
import './App.css';

function App() {

  return <Button/>
}

function Button()
{
  const [Count,setCount]=useState(0);

  function increaseCount()
  {
    setCount(Count+1);
  }
  function decreaseCount()
  {
    setCount(Count-1);
  }

  return(
  <div>{Count}
    <button onClick={increaseCount}>Increase</button>
  <button onClick={decreaseCount}>Decrease</button></div> );
}

export default App;
