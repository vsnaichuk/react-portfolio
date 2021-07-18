import s from './ProjectCard.module.scss';
import { BiLinkExternal } from 'react-icons/bi';
import Button from '../../../components/UIElements/Button/Button';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className={s.card}>
      <div className={s.cardWrapper}>
        <div className={s.image}>
          <img src={image} alt="card-img" />
        </div>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </div>

        <Button
          style={{ width: '15rem' }}
          className="primary"
          href={link}
          target="_blank"
        >
          <BiLinkExternal /> &nbsp; View Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
