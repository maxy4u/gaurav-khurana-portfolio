import { memo, FC, useState, useCallback, useMemo } from 'react';
import { useGetRepositoriesQuery, GetRepositoriesQuery, Repository } from '../utils';
import { Layout, SearchBox, Loader } from '../components';
import stylesHome from '../styles/Home.module.css';
import styles from '../styles/GitHub.module.css';

interface TGitHub {
  user: string;
}

const GitHub: FC<TGitHub> = ({ user }) => {
  const [query, setQuery] = useState<string | null>(null);
  const { data, isLoading, error } = useGetRepositoriesQuery<GetRepositoriesQuery>();
  const { getRepos: repositories } = data || { getRepos: [] };

  const onSearch = useCallback((value: string) => {
    setQuery(value);
  }, []);
  const regexp = useMemo(() => new RegExp(`${query}`, 'gi'), [query]);
  const serchResult = !!query && (repositories as Repository[])?.filter(({ name }) => regexp.test(name as string));

  if (isLoading) {
    return <Loader user={user} />;
  }

  if (error) {
    return <h2>Sorry, there&aposs been an error...</h2>;
  }

  return (
    <Layout {...{ user, title: 'GitHub' }}>
      <section className={`${stylesHome.container} ${styles.gitCont}`}>
        <SearchBox onSearch={onSearch} placeholder='Search repos ...' />
        <h2 className={styles.h2}>List of Repositories</h2>
        <ul className={styles.repos}>
          {((serchResult || repositories) as Repository[])?.map(
            ({ id, description, name, url }: Partial<Repository>) => (
              <li key={id} className={styles.list}>
                <a href={url as string} title={description as string} target='_blank' rel='noreferrer'>
                  {name}
                </a>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
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
