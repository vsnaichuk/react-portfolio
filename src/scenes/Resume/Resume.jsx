import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { Document, Page, pdfjs } from 'react-pdf';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const resumeLink =
    'https://raw.githubusercontent.com/VolodumurSN/VolodumurSN/master/CV.pdf';

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        <Document
          loading={<LinerProgress />}
          file={{
            url: resumeLink,
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
