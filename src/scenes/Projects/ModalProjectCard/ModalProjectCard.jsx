import s from './ModalProjectCard.module.scss';
import { BiLinkExternal } from 'react-icons/all';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useLocation } from 'react-router-dom';

const ModalProjectCard = () => {
  const {
    state: { image, title, links, technologies },
  } = useLocation();

  return (
    <Modal>
      <div className={s.cardWrapper}>
        <div className={s.image}>
          <img src={image} alt="card-img" />
        </div>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>

          <div className={s.technologies}>
            {technologies.map((tech) => (
              <span>{tech}</span>
            ))}
          </div>
        </div>

        <div className={s.cardFooter}>
          <Button
            style={{ width: '12rem' }}
            className="primary"
            href={links.site}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; Visit website
          </Button>

          <Button
            style={{ width: '12rem' }}
            className="primary"
            href={links.repo}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; Know more
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
