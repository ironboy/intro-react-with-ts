// Declare the types of props you have 
// with an interface
interface CounterFormProps {
  counter: number,
  // you can declare function types like this
  // note: void = returns nothing
  setCounter: (newValue: number) => void;
}

export default function CounterForm(props: CounterFormProps) {
  const { counter, setCounter } = props;
  return <form>
    <input
      type="number"
      value={counter}
      // for inline event handlers TS can infer the type
      // of event and the event target automatically
      // + before a string converts it to a number
      onChange={(event) => setCounter(+event.currentTarget.value)}
    />
  </form>;
}