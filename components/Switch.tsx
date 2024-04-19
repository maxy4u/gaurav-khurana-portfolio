'use client';
import { memo, useCallback, ChangeEvent } from 'react';
import styles from '../styles/Switch.module.css';
import { useAppContext } from '../context';
import { ActionTypes } from '../constants';
import { createCookie } from '../app/actions';
import { useTransition } from 'react';

export type Tswitch = {
  name: string;
  id: string;
  className?: string;

  disabled?: boolean;
};

function Switch({ name, id, className, disabled = false }: Tswitch): JSX.Element {
  const [, startTransition] = useTransition();
  const {
    state: { theme },
    dispatch
  } = useAppContext();
  const onChange = useCallback(({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    const theme = checked ? 'dark' : 'light';
    console.log('One change them called');
    dispatch({ type: ActionTypes.CHANGE_THEME, theme });
    startTransition(async () => {
      await createCookie('theme', theme);
    });
  }, []);
  const checked = theme === 'dark';
  return (
    <label htmlFor={id} className={`${className} ${styles.switch}`}>
      <input type='checkbox' name={name} id={id} onChange={onChange} disabled={disabled} checked={checked} />
      <span className={`${styles.slider}`}></span>
    </label>
  );
}

export default memo(Switch);
