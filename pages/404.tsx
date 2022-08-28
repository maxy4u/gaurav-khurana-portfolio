import { memo } from 'react';
import { Layout } from '../components';
import styles from '../styles/Home.module.css';
import localStyles from '../styles/NotFound.module.css';

function NotFound(): JSX.Element {
  return (
    <Layout className={localStyles.notfound}>
      <div className={styles.container}>
        <h2>Opps page not found</h2>
      </div>
    </Layout>
  );
}

export default memo(NotFound);
