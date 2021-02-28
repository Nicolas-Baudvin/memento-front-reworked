import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Store/reducer";
import Form from "./Form";
import "./style.scss";

const Login = () => {
  const history = useHistory();
  const handleClick = () => history.push("/inscription");
  const { token } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, [token]);

  return (
    <div className="registration">
      <div className="registration-container">
        <img src={`${process.env.PUBLIC_URL}/img/login.png`} alt="login" />
        <h2>Connexion</h2>
        <Form />
        <div className="registration-links">
          <a href="#">Mot de passe oublié ?</a>
          <a href="#" onClick={handleClick}>
            Pas de compte ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
