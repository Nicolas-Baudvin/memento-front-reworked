import "./style.scss";

interface InputProps {
  label: string;
  placeholder: string;
  htmlFor: string;
  tooltip?: string;
  type: string;
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
      <img
        src={`${process.env.PUBLIC_URL}/img/question.png`}
        alt="tooltip"
        width="20"
        height="20"
      />
      <span>{tooltip}</span>
    </div>
  );
};

export default Input;
