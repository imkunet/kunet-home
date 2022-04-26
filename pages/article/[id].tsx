import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from '../../styles/Article.module.css';
import globalStyles from '../../styles/Global.module.css';

import kyleImage from '../../public/kyle.webp';

const Article: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={globalStyles.justifyCenter}>
      <div className={styles.articleContainer}>
        <h1 className={styles.articleTitle}>The Fairy Tale of &quot;Journalistic Integrity&quot;</h1>
        <p className={styles.articleSubtitle}>If you look too far beyond the horizon, the sun will burn your eyes</p>
        <div className={styles.articleAuthorContainer}>
          <div className={styles.articleAuthorImageContainer}>
            <Image src={kyleImage} className={styles.articleAuthorImage} layout={'responsive'} alt={'Kyle Nguyen'} />
          </div>
          <span className={styles.articleAuthorName}>
            <span>Kyle Nguyen</span>
            <span className={styles.articleAuthorPublished}>Published 4/26/22</span>
          </span>
        </div>

        <div className={styles.articleDivider}></div>

        <div className={styles.articleContent}>
          <h2>Acknowledge the truth</h2>
          <p>
            As a society, we must come together to realize a simple truth: lorem ipsum dolor sit amet consecutor
            consequat. Lorem ipsum dolor sit amet consecutor consequat. Lorem ipsum dolor sit amet consecutor consequat.
          </p>
          <h2>Opinionated response</h2>
          <p>
            Personally I think this due to some stupid funny arbitrary reason which I cannot disclose or risk instant
            termination from our cosmic overlords. What is life if the future is determined nothing more than a spinning
            metal disk, a metal disk of no reason. When chaos determines our lives, what really matters at all?
          </p>
          <h2>Demand better from those in power</h2>
          <p>
            Just hope the people who could not care about you less care about you all of a sudden and just fix
            everything.
          </p>
        </div>

        <div className={styles.articleFooter}>HEY!</div>
      </div>
    </div>
  );
};

export default Article;
