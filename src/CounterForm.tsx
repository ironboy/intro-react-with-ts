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

  // functions that are event handlers and not inlined
  // requires to specify event type and target type like this:
  function setCounterFromForm(event: React.ChangeEvent<HTMLInputElement>) {
    setCounter(+event.currentTarget.value);
  }

  return <form>
    <input
      type="number"
      value={counter}
      // + before a string converts it to a number
      onChange={setCounterFromForm}
    />
  </form>;
}