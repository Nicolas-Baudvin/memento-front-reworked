import cx from "classnames";
import "./style.scss";

interface InputProps {
  label?: string;
  placeholder: string;
  htmlFor: string;
  tooltip?: string;
  type: string;
  onChange: any;
  value: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  htmlFor,
  tooltip,
  type,
  error,
  onChange,
  value,
  label,
}) => {
  return (
    <div className="input">
      { label && <label htmlFor={htmlFor}>{label}</label>}
      <input onChange={onChange} value={value} type={type} placeholder={placeholder} />
      <p className={cx("input-tooltip", { "input-error": Boolean(error) })}>
        {error || tooltip}
      </p>
    </div>
  );
};

export default Input;
