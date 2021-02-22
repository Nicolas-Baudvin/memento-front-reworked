import "./style.scss";

const Home = () => {
  return (
    <main className="home">
      <div className="home-text">
        <h1>Simple, Efficace & Professionnel</h1>
        <h2>
          My Memento est indispensable dans l'organisation de votre entreprise.
        </h2>
        <button className="home-button">Commencer l'aventure</button>
        <img src={`${process.env.PUBLIC_URL}/img/todo-home.svg`} alt="logo"/>
      </div>
    </main>
  );
};

export default Home;
