import './style.scss';

const Header = () => {
    return <header>
        <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/img/Logo.png`} alt="Logo My Memento"/>
            <h1>My Memento</h1>
        </div>
        <nav>
            <button className="navButton">Nouveautés</button>
            <button className="navButton">Connexion</button>
            <button className="navButton">Inscription</button>
        </nav>
    </header>
};

export default Header;