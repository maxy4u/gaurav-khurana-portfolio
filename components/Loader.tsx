import { memo, FC } from 'react';
import styles from '../app/Home.module.css';
import { NLoading } from '../icons';

export type TLoader = {
  user: string;
};
const bgColor = '#FFFFFF';

const Loader: FC<TLoader> = () => {
  return (
    <section className={`${styles.container}`}>
      <NLoading bgColor={bgColor as string} />
    </section>
  );
};

export default memo(Loader);
