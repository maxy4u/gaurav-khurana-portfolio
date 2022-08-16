import { memo, FC } from 'react';
import client from '../client/apollo-client';
import { ApolloQueryResult, gql } from '@apollo/client';
import { Layout } from '../components';
import styles from '../styles/Home.module.css';

interface TRepositories {
  repositories: {
    id: number;
    name: string;
    owner: {
      avatar_url: string;
      login: string;
    };
    url: string;
    description: string;
  };
}

interface TRepoData {
  data: {
    getRepos: TRepositories[];
  };
}

interface TGitHub extends TRepositories {
  user: string;
}

const GitHub: FC<TGitHub> = ({ repositories, user }) => {
  return (
    <Layout {...{ user }}>
      <div className={styles.container}>GitHub Page coming soon</div>
    </Layout>
  );
};

export async function getStaticProps() {
  const {
    data: { getRepos: repositories },
  }: ApolloQueryResult<TRepoData['data']> = await client.query({
    query: gql`
      query GetRepositories {
        getRepos {
          id
          name
          owner {
            avatar_url
            login
          }
          url
          description
        }
      }
    `,
  });
  return {
    props: {
      repositories: repositories,
      user: process.env.user,
    },
  };
}

export default memo(GitHub);
