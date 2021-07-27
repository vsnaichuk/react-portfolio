import cx from 'classnames';
import s from './Modal.module.scss';
import { ReactComponent as ModalCloseIcon } from '../../assets/modal-close.svg';
import { useHistory } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Backdrop from '../UIElements/Backdrop/Backdrop';

const Modal = ({ children }) => {
  const history = useHistory();
  const modal = useRef(null);

  const closeModal = (e) => {
    e.stopPropagation();
    history.goBack();
    modal.current.classList.add('slide-out-bottom');
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className={s.container} onClick={closeModal}>
      <Backdrop />

      <div ref={modal} className={cx(s.modal, 'slide-in-bottom')}>
        <div className={s.closeWrapper} onClick={closeModal}>
          <button className={s.closeButton}>
            <ModalCloseIcon className={s.closeIcon} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
