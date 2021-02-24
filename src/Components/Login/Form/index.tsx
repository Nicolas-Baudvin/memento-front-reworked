import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../ReusableComponents/Button";
import Input from "../../../ReusableComponents/Input";
import { userAuth } from "../../../Store/UserData/actions";

const Form = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState<any>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userAuth(state));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => setState({ ...state, [inputName]: e.target.value });

  return (
    <form onSubmit={handleSubmit} action="">
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, "email")
        }
        value={""}
        type="email"
        label="Email"
        htmlFor="email"
        placeholder="exemple@gmail.com"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e, "password")
        }
        value={""}
        type="password"
        label="Mot de passe"
        htmlFor="pass"
        placeholder="•••••••••"
      />
      <Button title="Connexion" />
    </form>
  );
};

export default Form;
