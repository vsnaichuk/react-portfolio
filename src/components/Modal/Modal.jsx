import s from './Modal.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ModalCloseIcon } from '../../assets/modal-close.svg';
import Backdrop from '../UIElements/Backdrop/Backdrop';

const Modal = ({ children, show, onClose }) => {
  const navigate = useNavigate();

  const closeModal = (e) => {
    e.stopPropagation();

    onClose();
    navigate(-1);
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className={s.container}>
      {show && <Backdrop onClick={closeModal} />}

      <CSSTransition
        in={show}
        timeout={300}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <div className={s.modal}>
          <div className={s.closeWrapper} onClick={closeModal}>
            <button className={s.closeButton}>
              <ModalCloseIcon className={s.closeIcon} />
            </button>
          </div>

          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Modal;
