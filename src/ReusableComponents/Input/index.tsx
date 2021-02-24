import "./style.scss";

interface InputProps {
  label: string;
  placeholder: string;
  htmlFor: string;
  tooltip?: string;
  type: string;
  onChange: Function;
  value: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  htmlFor,
  tooltip,
  type,
}) => {
  return (
    <div className="input">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} placeholder={placeholder} />
      <p>{tooltip}</p>
    </div>
  );
};

export default Input;
