import { memo, ChangeEventHandler } from 'react';
import styles from '../styles/Switch.module.css';

export type Tswitch = {
  name: string;
  id: string;
  className: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

function Switch({ name, id, className, onChange, disabled = false }: Tswitch): JSX.Element {
  return (
    <label htmlFor={id} className={`${className} ${styles.switch}`}>
      <input type='checkbox' name={name} id={id} onChange={onChange} disabled={disabled} />
      <span className={`${styles.slider}`}></span>
    </label>
  );
}

export default memo(Switch);
