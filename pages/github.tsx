import { memo, FC, useState, useCallback, useMemo } from 'react';
import client from '../client/apollo-client';
import { ApolloQueryResult, gql } from '@apollo/client';
import { Layout, SearchBox } from '../components';
import stylesHome from '../styles/Home.module.css';
import { TRepositories } from "./api/resolvers";
import styles from "../styles/GitHub.module.css";

interface TRepos {
  repositories: Array<TRepositories>
}

interface TRepoData {
  data: {
    getRepos: TRepositories[];
  };
}

interface TGitHub extends TRepos {
  user: string;
}

const GitHub: FC<TGitHub> = ({ repositories, user }) => {
  const [query, setQuery]  = useState<string | null>(null);
  const onSearch = useCallback((value: string) => {
    console.log(value);
    setQuery(value);
  }, []);
  const regexp = useMemo(()=>(new RegExp(`${query}`,'gi')),[query]) ;
  const serchResult = query && repositories.filter(({name})=>regexp.test(name));

  return (
    <Layout {...{ user }}>
      <section className={`${stylesHome.container} ${styles.gitCont}`}>
      <SearchBox onSearch={onSearch} placeholder="Search repos ..."/>
        <h2 className={styles.h2}>List of Repositories</h2>
        <ul className={styles.repos}>
          {(serchResult || repositories).map(({id, description, name, url})=>(
          <li key={id} className={styles.list}>
            <a href={url} title={description} target="_blank">{name}</a>
          </li>))}
        </ul>
      </section>
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
