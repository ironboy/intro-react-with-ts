interface InputProps {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // ?: optional property doesn't have to exist
  optional?: boolean;
}

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