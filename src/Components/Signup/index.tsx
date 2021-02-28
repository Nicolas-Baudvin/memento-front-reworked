import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Store/reducer";
import Form from "./Form";

const Signup = () => {
  const history = useHistory();
  const { token } = useSelector((state: RootState) => state.user);

  const handleClick = () => history.push("/connexion");

  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, [token]);
  return (
    <div className="registration">
      <div className="registration-container">
        <img
          src={`${process.env.PUBLIC_URL}/img/welcome.svg`}
          alt="inscription"
        />
        <h2>Inscription</h2>
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

export default Signup;
