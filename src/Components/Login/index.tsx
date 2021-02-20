import "./style.scss";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  return (
    <div className="registration">
      <div className="registration-container">
        <img src={`${process.env.PUBLIC_URL}/img/login.png`} alt="login" />
        <h2>Connexion</h2>
        <Input
          type="email"
          label="Email"
          htmlFor="email"
          placeholder="exemple@gmail.com"
        />
        <Input
          type="password"
          label="Mot de passe"
          htmlFor="pass"
          placeholder="•••••••••"
        />
        <Button title="Connexion" />

        <div className="registration-links">
            <a href="#">Mot de passe oublié ?</a>
            <a href="#">Pas de compte ?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
