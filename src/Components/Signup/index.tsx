import Input from "../../ReusableComponents/Input";
import Button from "../../ReusableComponents/Button";

const Signup = () => {
  return (
    <div className="registration">
      <div className="registration-container">
        <img
          src={`${process.env.PUBLIC_URL}/img/login.png`}
          alt="inscription"
        />
        <h2>Inscription</h2>
        <form action="">
          <Input
            type="email"
            label="Email"
            htmlFor="email"
            placeholder="exemple@gmail.com"
            tooltip="L'email doit être valide"
          />
          <Input
            type="password"
            label="Mot de passe"
            htmlFor="pass"
            placeholder="•••••••••"
            tooltip="Le mot de passe doit contenir 8 caractères minimum"
          />
          <Input
            type="password"
            label="Confirmez le mot de passe"
            htmlFor="passConf"
            placeholder="•••••••••"
            tooltip="Ce champs doit contenir exactement le même mot de passe défini au dessus"
          />
          <Button title="Inscription" />
        </form>
        <div className="registration-links">
          <a href="#">Mot de passe oublié ?</a>
          <a href="#">Pas de compte ?</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
