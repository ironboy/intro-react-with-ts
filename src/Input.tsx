import type InputProps from "./interfaces/InputProps";

export default function Input(props: InputProps) {
  const { label, name, value, type, onChange, optional } = props;
  return <label>
    {label}
    <input
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      required={!optional}
    />
  </label>;
}