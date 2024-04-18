'use client';
import { memo, useState, useCallback, useMemo } from 'react';
import { useGetRepositoriesQuery, GetRepositoriesQuery, Repository } from '../../utils';
import { SearchBox, Loader } from '../../components';
import stylesHome from '../Home.module.css';
import styles from '../../styles/GitHub.module.css';

export default memo(function GitHub() {
  const user = process.env.NEXT_PUBLIC_USER;
  const [query, setQuery] = useState<string | null>(null);
  const { data, isLoading, error } = useGetRepositoriesQuery<GetRepositoriesQuery>();
  debugger;
  const { getRepos: repositories } = data || { getRepos: [] };

  const onSearch = useCallback((value: string) => {
    setQuery(value);
  }, []);
  const regexp = useMemo(() => new RegExp(`${query}`, 'gi'), [query]);
  const serchResult = !!query && (repositories as Repository[])?.filter(({ name }) => regexp.test(name as string));

  if (isLoading) {
    return <Loader user={user as string} />;
  }

  if (error) {
    return <h2>Sorry, there&aposs been an error...</h2>;
  }

  return (
    <section className={`${stylesHome.container} ${styles.gitCont}`}>
      <SearchBox onSearch={onSearch} placeholder='Search repos ...' />
      <h2 className={styles.h2}>List of Repositories</h2>
      <ul className={styles.repos}>
        {((serchResult || repositories) as Repository[])?.map(({ id, description, name, url }: Partial<Repository>) => (
          <li key={id} className={styles.list}>
            <a href={url as string} title={description as string} target='_blank' rel='noreferrer'>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
});
