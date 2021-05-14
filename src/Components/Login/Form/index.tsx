import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "../../../ReusableComponents/Button";
import Input from "../../../ReusableComponents/Input";
import { RootState } from "../../../Store/reducer";
import { authenticateUser } from "../../../Store/UserData/reducer";
import { InputName } from "./types";
import checkLoginFields from "./utils";

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((State: RootState) => State.user);
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
    console.log("submit")
    const errors = checkLoginFields(state);
    if (errors.email || errors.password) return setErrors({ ...errors });
    setErrors({ email: "", password: "" });
    return dispatch(authenticateUser({ ...state }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: InputName
  ) => setState({ ...state, [inputName]: e.target.value });

  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, [])

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
