import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  source?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Perseverance',
    Svg: require('@site/static/img/perseverance.svg').default,
    description: (
      <>
        Arise, awake, and stop not until the goal is reached
      </>
    ),
    source: 'Swami Vivekananda',
  },
  {
    title: 'Karma',
    Svg: require('@site/static/img/karma.svg').default,
    description: (
      <>
        You have the right to perform your duty, but not the fruits of your actions
      </>
    ),
    source: 'Bhagavad Gita 2.47',
  },
  {
    title: 'Determination',
    Svg: require('@site/static/img/determination.svg').default,
    description: (
      <>
        Fall seven times, stand up eight; never ever give up
      </>
    ),
    source: 'Japanese Proverb',
  },
  {
    title: 'Dreams',
    Svg: require('@site/static/img/dreams.svg').default,
    description: (
      <>
        A dream is not that which you see while sleeping, it is something that does not let you sleep
      </>
    ),
    source: 'Dr. APJ Abdul Kalam',
  },
  {
    title: 'Kindness',
    Svg: require('@site/static/img/kindness.svg').default,
    description: (
      <>
        No act of kindness, no matter how small, is ever wasted
      </>
    ),
    source: 'Aesop',
  },
  {
    title: 'Resilience',
    Svg: require('@site/static/img/resilience.svg').default,
    description: (
      <>
        Life isn’t about waiting for the storm to pass; it’s about learning to dance in the rain
      </>
    ),
    source: 'Vivian Greene',
  },
];

function Feature({ title, Svg, description, source }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureItem)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {source && <p className={styles.source}>- {source}</p>}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.headingContainer}>
          <h1>Some Principles that I try to Live by</h1>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
