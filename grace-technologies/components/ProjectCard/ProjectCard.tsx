import CheckList from '@/components/CheckList/CheckList';
import Button from '@/components/Button/Button';
import EnquireButton from '@/components/EnquireButton/EnquireButton';
import IllustrationFrame from '@/components/IllustrationFrame/IllustrationFrame';
import { ILLUSTRATIONS } from '@/components/Illustrations/Illustrations';
import Reveal from '@/components/Reveal/Reveal';
import Tag from '@/components/Tag/Tag';
import type { Project, Service } from '@/lib/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  relatedSlug: string;
  related: Service;
}

export default function ProjectCard({ project, relatedSlug, related }: ProjectCardProps) {
  const Illustration = ILLUSTRATIONS[project.k];
  return (
    <Reveal as="article" className={styles.card}>
      <IllustrationFrame>
        {project.imageSrc ? (
          <img className={styles.logo} src={project.imageSrc} alt={project.imageAlt ?? `${project.t} logo`} />
        ) : (
          <Illustration />
        )}
      </IllustrationFrame>
      <div className={styles.body}>
        <Tag>Client project</Tag>
        <h3 className={styles.title}>{project.t}</h3>
        {project.service && <p className={styles.service}>{project.service}</p>}
        {project.description && <p className={styles.description}>{project.description}</p>}
        <dl className={styles.facts}>
          <div>
            <dt className={styles.term}>Business problem</dt>
            <dd className={styles.detail}>{project.p}</dd>
          </div>
          <div>
            <dt className={styles.term}>Solution provided</dt>
            <dd className={styles.detail}>{project.s}</dd>
          </div>
          <div>
            <dt className={styles.term}>Key features</dt>
            <dd className={styles.detail}>
              <CheckList size="sm" items={project.f} />
            </dd>
          </div>
          <div>
            <dt className={styles.term}>Expected benefits</dt>
            <dd className={styles.detail}>{project.o}</dd>
          </div>
        </dl>
        {project.caseStudySections && (
          <div className={styles.caseStudy}>
            <h4>Case study</h4>
            {project.caseStudySections.map((section) => (
              <div key={section.heading}>
                <strong>{section.heading}</strong>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        )}
        <div className={styles.actions}>
          <Button
            className={styles.actionButton}
            href={project.websiteUrl ?? `/services/${relatedSlug}`}
            variant="primary"
            size="sm"
          >
            View project
          </Button>
          <EnquireButton className={styles.actionButton} variant="ghost" size="sm">Contact</EnquireButton>
        </div>
      </div>
    </Reveal>
  );
}
