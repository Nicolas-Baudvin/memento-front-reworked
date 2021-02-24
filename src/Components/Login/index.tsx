import Form from "./Form";
import "./style.scss";

const Login = () => {
  return (
    <div className="registration">
      <div className="registration-container">
        <img src={`${process.env.PUBLIC_URL}/img/login.png`} alt="login" />
        <h2>Connexion</h2>
        <Form />
        <div className="registration-links">
          <a href="#">Mot de passe oublié ?</a>
          <a href="#">Pas de compte ?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
