import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../ReusableComponents/Button";
import Input from "../../../ReusableComponents/Input";
import { userAuth } from "../../../Store/UserData/actions";
import { InputName } from "./types";
import checkLoginFields from "./utils";

const Form = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [state, setState] = useState<any>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = checkLoginFields(state);
    if (errors.email || errors.password) return setErrors({ ...errors });
    setErrors({ email: "", password: "" });
    dispatch(userAuth(state));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: InputName
  ) => setState({ ...state, [inputName]: e.target.value });

  return (
    <form onSubmit={handleSubmit} action="">
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, "email")
        }
        value={state.email}
        type="email"
        label="Email"
        htmlFor="email"
        placeholder="exemple@gmail.com"
        error={errors.email}
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, "password")
        }
        value={state.password}
        type="password"
        label="Mot de passe"
        htmlFor="pass"
        placeholder="•••••••••"
        error={errors.password}
      />
      <Button title="Connexion" />
    </form>
  );
};

export default Form;
