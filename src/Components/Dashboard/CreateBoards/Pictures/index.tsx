import { pictures } from "../utils";

interface PicturesProps {
    handleClickImage: Function
}

const Pictures: React.FC<PicturesProps> = ({ handleClickImage }) => {
  return (
    <div className="dashboard-form-pics">
      {pictures.map((picture, i) => (
        <button
          type="button"
          onClick={() => handleClickImage(picture)}
          className={`dashboard-form-pics-btn-${i}`}
          key={i}
        >
          <img src={picture.url} alt={picture.alt} />
        </button>
      ))}
    </div>
  );
};  

export default Pictures;