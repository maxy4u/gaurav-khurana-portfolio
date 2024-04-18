import styles from '../Home.module.css';
// import { useGetUserExperienceQuery } from '@/utils/gql-generated-hooks';
// import { serverFetch } from '@/utils/server-query';

export type TResume = {
  user: string;
};

export default async function Resume() {
  // const data = await serverFetch(useGetUserExperienceQuery, {
  //   variables: { email: 'khurana.g@hotmail.com', pwd: 'Test@123' }
  // });

  // console.log('Resume component', data);
  return <div className={styles.container}>{'Resume Page coming soon'}</div>;
}
