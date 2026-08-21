import { useState } from 'react';
import CounterForm from './CounterForm';

export default function App() {
  const [counter, setCounter] = useState(0);

  return <>
    <button onClick={() => setCounter(counter + 1)}>
      {counter}
    </button>
    <CounterForm counter={counter} setCounter={setCounter} />
  </>;
}