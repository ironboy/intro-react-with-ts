export default interface InputProps {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // ?: optional property doesn't have to exist
  optional?: boolean;
}