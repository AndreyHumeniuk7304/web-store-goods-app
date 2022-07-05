import Button from "../Buttons/Button";
import "./Modal.scss";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modal/actions";
const Modal = ({ closeButton, header, text, id, succesClick }) => {
  const dispatch = useDispatch();

  const closeButtonAction = () => {
    dispatch(showModal());
  };

  return (
    <div id={id} onClick={closeButtonAction} className="modal-window__overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <h2 className="modal-content__title">{header}</h2>
        {closeButton ? (
          <Button
            className="modal-content__close-btn"
            text="X"
            handleClickButton={closeButtonAction}
          />
        ) : null}
        <div className="modal-content__main-content main-content">
          <p className="main-content__text">{text}</p>

          <div className="footer-btns">
            <Button
              className="btn btn_ok"
              text="Ok"
              handleClickButton={succesClick}
            />

            <Button
              className="btn btn_cancel"
              text="Cancel"
              handleClickButton={closeButtonAction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  closeButton: true,
};

export default Modal;
