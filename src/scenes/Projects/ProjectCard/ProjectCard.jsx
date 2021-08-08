import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';

const ProjectCard = ({ id, image, title, description }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link
          to={{
            pathname: `/project/${id}`,
            state: {
              background: location,
            },
          }}
        >
          <div className={s.image}>
            <img src={image} alt="card-img" />
          </div>
        </Link>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
