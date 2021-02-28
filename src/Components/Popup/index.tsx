import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { hideError } from "../../Store/Message/actions";
import { RootState } from "../../Store/reducer";

import "./style.scss";

const Popup = () => {
    const dispatch = useDispatch();
  const { isShow, message, isError } = useSelector((state: RootState) => state.error);

  const handleClick = () => dispatch(hideError());

  return (
    <div
      className={cx("popup", { error: isError, message: !isError, "popup-show": isShow, "popup-hide": !isShow })}
      onClick={handleClick}
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/info.svg`}
        alt="Information icone"
      />
      {message}
    </div>
  );
};

export default Popup;
