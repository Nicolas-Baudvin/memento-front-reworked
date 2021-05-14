import Input from "../../../ReusableComponents/Input";
import Button from "../../../ReusableComponents/Button";
import { useState } from "react";
import inputs from "../utils";
import { InputName } from "../../Login/Form/types";
import checkFields, { FormErrors } from "../utils/checkFields";

const initialErrorState = {
  email: "",
  password: "",
  confPass: "",
  username: ""
};

const Form: React.FC = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confPass: "",
    username: ""
  });

  const [state, setState] = useState<any>({
    email: "",
    password: "",
    confPass: "",
    username: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors: FormErrors = checkFields(state);
    if (formErrors.confPass || formErrors.password || formErrors.email || formErrors.username)
      return setErrors({ ...formErrors });

    setErrors({ ...initialErrorState });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: InputName
  ) => setState({ ...state, [inputName]: e.target.value });

  return (
    <form onSubmit={handleSubmit} action="">
      {inputs.map((input, i) => (
        <Input
          key={i}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, input.htmlFor)
          }
          value={state[input.htmlFor]}
          type={input.type}
          label={input.label}
          htmlFor={input.htmlFor}
          placeholder={input.placeholder}
          tooltip={input.tooltip}
          error={errors[input.htmlFor]}
        />
      ))}
      <Button title="Inscription" />
    </form>
  );
};

export default Form;
