import s from './ProjectCard.module.scss';
// import { BiLinkExternal } from 'react-icons/bi';
// import Button from '../../../components/UIElements/Button/Button';
import { Link, useLocation } from 'react-router-dom';

const ProjectCard = ({
  id,
  image,
  title,
  description,
  links,
  technologies,
}) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <Link
        to={{
          pathname: `/projects/${id}`,
          state: {
            background: location,
            image,
            title,
            links,
            technologies,
          },
        }}
      >
        <div className={s.cardWrapper}>
          <div className={s.image}>
            <img src={image} alt="card-img" />
          </div>

          <div className={s.cardBody}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
          </div>

          {/*<Button*/}
          {/*  style={{ width: '15rem' }}*/}
          {/*  className="primary"*/}
          {/*  href={link}*/}
          {/*  target="_blank"*/}
          {/*>*/}
          {/*  <BiLinkExternal /> &nbsp; View Project*/}
          {/*</Button>*/}
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
