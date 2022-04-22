import { NextPage } from 'next';
import { useRouter } from 'next/router';

import styles from '../../styles/Article.module.css';
import globalStyles from '../../styles/Global.module.css';

const Article: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={globalStyles.justifyCenter}>
      <div className={globalStyles.pageContainer}>
        <h1 className={styles.articleTitle}>these take</h1>
        <p className={styles.articleSubtitle}>
          the shape of a long round arch with its path high above and its two ends apparently beyond the horizon
        </p>
        <p>by: Kyle Nguyen published date here</p>

        <h2>Lorem ipsum {id}</h2>
        <p>dolor sit amet consecutor</p>
      </div>
    </div>
  );
};

export default Article;
