import Form from "./Form";

const Signup = () => {
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
          <a href="#">Pas de compte ?</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
