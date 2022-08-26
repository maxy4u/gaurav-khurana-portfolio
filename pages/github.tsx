import { memo, FC, useState, useCallback, useMemo } from 'react';
// import client from '../client/apollo-client';
import { gql, useQuery } from '@apollo/client';
import { Layout, SearchBox } from '../components';
import stylesHome from '../styles/Home.module.css';
import { TRepositories } from './api/resolvers';
import styles from '../styles/GitHub.module.css';

interface TRepoData {
  data: {
    getRepos: TRepositories[] | [];
  };
}

interface TGitHub {
  user: string;
}

const Query = gql`
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
`;

const GitHub: FC<TGitHub> = ({ user }) => {
  const [query, setQuery] = useState<string | null>(null);
  const { data, loading, error } = useQuery<TRepoData['data']>(Query);
  const { getRepos: repositories }: { getRepos: TRepositories[] | [] } = data || { getRepos: [] };

  const onSearch = useCallback((value: string) => {
    setQuery(value);
  }, []);
  const regexp = useMemo(() => new RegExp(`${query}`, 'gi'), [query]);
  const serchResult = query && repositories.filter(({ name }: { name: string }) => regexp.test(name));

  if (loading) {
    return <h2>Loading Data...</h2>;
  }

  if (error) {
    return <h2>Sorry, there&aposs been an error...</h2>;
  }

  return (
    <Layout {...{ user }}>
      <section className={`${stylesHome.container} ${styles.gitCont}`}>
        <SearchBox onSearch={onSearch} placeholder='Search repos ...' />
        <h2 className={styles.h2}>List of Repositories</h2>
        <ul className={styles.repos}>
          {(serchResult || repositories).map(({ id, description, name, url }: Partial<TRepositories>) => (
            <li key={id} className={styles.list}>
              <a href={url} title={description} target='_blank' rel='noreferrer'>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  //
  /* 
  keeping below comment for my reference 
  Below logic will fail the build as we are pointing  to same app's "api/graphql"
  Since getStaticProps and getServerSide props gets executed at build time the query 
  will fail because "api/graphql" is not ready as it is internal url
  So while executing api call in these two function make sure the url is external
  */
  // const {
  //   data: { getRepos: repositories }
  // }: ApolloQueryResult<TRepoData['data']> = await client.query({
  //   query: gql`
  //     query GetRepositories {
  //       getRepos {
  //         id
  //         name
  //         owner {
  //           avatar_url
  //           login
  //         }
  //         url
  //         description
  //       }
  //     }
  //   `
  // });
  return {
    props: {
      user: process.env.user
    }
  };
}

export default memo(GitHub);
