import styles from '../Home.module.css';
import { useGetUserExperienceQuery, Experience, User } from '@/utils/gql-generated-hooks';
import { serverFetch } from '@/utils/server-query';

export type TResume = {
  user: string;
};

export default async function Resume() {
  let experience;
  try {
    const data = await serverFetch(useGetUserExperienceQuery, {
      variables: { email: 'khurana.g@hotmail.com', pwd: 'Test@1234' }
    });
    const { getUserExperience } = data;
    const [{ exp }]: [User] = getUserExperience as [User];
    experience = exp || [];
  } catch (e) {
    console.log(e);
  }

  return (
    <div className={styles.container}>
      {(experience as Experience[]).map(({ title, id }) => {
        return (
          <ul key={id}>
            <li>{title}</li>
          </ul>
        );
      })}
    </div>
  );
}
