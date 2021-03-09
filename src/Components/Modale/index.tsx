import "./style.scss";

interface ModaleProps {
  handleClickNextButton: React.MouseEventHandler<HTMLButtonElement>;
  handleClickBackButton: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
  content: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modale = ({
  title,
  handleClickNextButton,
  content,
  handleClickBackButton,
  setVisible,
}: ModaleProps) => {
  const handleClickBlurModale = (e: any) =>
    e.target.classList.contains("modale") && setVisible(false);

  return (
    <div onClick={handleClickBlurModale} className="modale">
      <div className="modale-container">
        <div className="modale-header">
          <h2> {title} </h2>
        </div>
        <div className="modale-content">{content}</div>
        <div className="modale-buttons">
          <button onClick={handleClickBackButton} className="modale-back">
            Retour
          </button>
          <button onClick={handleClickNextButton} className="modale-confirm">
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modale;
