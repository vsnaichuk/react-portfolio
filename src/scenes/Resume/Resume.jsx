import s from './Resume.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import files from '../../assets/resume-files.svg';
import { Document, Page, pdfjs } from 'react-pdf';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <img src={files} alt="files-icon" />
          </div>
        </div>

        <Document
          loading={<LinerProgress />}
          file={{
            url: 'https://raw.githubusercontent.com/VolodumurSN/VolodumurSN/master/CV.pdf',
          }}
        >
          <Page
            loading={<LinerProgress />}
            className={s.page}
            width={1000}
            pageNumber={1}
          />
        </Document>
      </div>
    </BaseLayout>
  );
};

export default Resume;
