import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    scale: 0.75,
    title: "Language",
    Svg: require("@site/static/img/application-coding-web-cog-config-options-svgrepo-com.svg")
      .default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    scale: 0.75,
    title: "Application",
    Svg: require("@site/static/img/application-coding-web-page-add-svgrepo-com.svg")
      .default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    scale: 0.75,
    title: "Overview",
    Svg: require("@site/static/img/application-coding-web-page-hot-fire-svgrepo-com.svg")
      .default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (

    <div class="landing-page-card">
      <div class="landing-page-card-header">
        <Svg className={styles.featureSvg} role="img" />

        <div class="landing-page-card-header-title">{title}</div>
      </div>
      <div class="landing-page-card-description">{description}</div>

      <div class="landing-page-card-link">
        <div class="landing-page-card-link-title">Start Now</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="landing-page-container">
        <div className="landing-page-cards">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
