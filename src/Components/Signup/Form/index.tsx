import Input from "../../../ReusableComponents/Input";
import Button from "../../../ReusableComponents/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createAccount } from "../../../Store/UserData/actions";
import inputs from "../utils";

const Form: React.FC = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState<any>({
    email: "",
    password: "",
    confPass: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createAccount(state));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    setState({ ...state, [inputName]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} action="">
      {inputs.map((input) => (
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, input.type)
          }
          value={state[input.htmlFor]}
          type={input.type}
          label={input.label}
          htmlFor={input.htmlFor}
          placeholder={input.placeholder}
          tooltip={input.tooltip}
        />
      ))}
      <Button title="Inscription" />
    </form>
  );
};

export default Form;
