import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button-md"
            to="/docs/intro">
            header
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div class="landing-page-container">
      <div class="landing-page-head">
        <div class="landing-page-head-left">
          
          <div class="landing-page-head-title landing-page-head-title-mute">
            Welcome,</div>
            
            <div class="landing-page-head-title">ÜNLEM</div>
            
            <div class="landing-page-head-description">Start your for Documents.</div>
            
            </div>

            <div class="landing-page-head-right">

            <div class="landing-page-card-header-title">Apps</div>
            
            </div>
            
            <div class="landing-page-card-description">Create awesome integrations and apps with our app development kit.
            </div>
            
            </div>

          </div>

          <HomepageFeatures />

      </main>

    </Layout>
  );
}
