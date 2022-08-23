import { memo, ChangeEventHandler } from 'react';
import styles from '../styles/Switch.module.css';
import { TState } from '../context';

export type Tswitch = {
  name: string;
  id: string;
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  theme: TState['theme'];
};

function Switch({ name, id, className, onChange, disabled = false, theme }: Tswitch): JSX.Element {
  const checked = theme === 'dark';
  return (
    <label htmlFor={id} className={`${className} ${styles.switch}`}>
      <input type='checkbox' name={name} id={id} onChange={onChange} disabled={disabled} {...{ checked }} />
      <span className={`${styles.slider}`}></span>
    </label>
  );
}

export default memo(Switch);
