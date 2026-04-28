import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGlow} />
      <div className={styles.heroContent}>
        <p className={styles.heroRole}>Software Engineer · Backend · IIT Kharagpur</p>
        <h1 className={styles.heroName}>Priyanshu Ranjan</h1>
        <p className={styles.heroTagline}>
          <span className={styles.taglineAccent} />
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/about/introduction">
            Dive into My Story
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.resumeBtn)}
            href="https://drive.google.com/file/d/1Mk4UGkqLQE5kBoLXUr1HTm0WfGg7avMR/view?usp=sharing"
            target="_blank">
            View Resume
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`portfolio`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
