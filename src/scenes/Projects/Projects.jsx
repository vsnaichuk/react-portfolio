import s from './Projects.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { projects } from '../../data';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          My Recent <strong className={s.purple}>Works</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a few projects I've worked on recently.
        </p>

        <div className={s.projects}>
          {projects.map((props) => (
            <ProjectCard {...props} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Projects;
