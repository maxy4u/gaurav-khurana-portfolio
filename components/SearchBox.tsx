import { FC, memo, KeyboardEventHandler, useCallback, useRef, KeyboardEvent } from "react";
import { SvgSearch } from "../icons" ;
import styles from "../styles/SearchBox.module.css";

export type SearchBoxProps = {
  onSearch: (val: string)=>void;
  placeholder?: string;
};

const SearchBox: FC<SearchBoxProps> = memo(({ onSearch, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter" && inputRef?.current){
        onSearch(inputRef.current.value);
    }
    },[onSearch, inputRef]);
  const onClick = useCallback(() => {
    if (inputRef?.current) {
      onSearch(inputRef.current.value);
    }
  }, [onSearch, inputRef]);
  const onClear = useCallback(()=>{ 
    if (inputRef?.current) {
        inputRef.current.value = "" ;
        onSearch(inputRef.current.value);
      }
},[inputRef])


  return (
    <div className={styles.cnSearchBox}>
      <div className={styles.deleteIconCont}>
        <input type="text" className={styles.cnSearchBoxInput} ref={inputRef} onKeyPress={onKeyPress} placeholder={placeholder} />
        <span className={styles.deleteIcon} onClick={onClear}>x</span>
        <div className={styles.cnSearchBoxIcon} {...{ onClick }}>
            <SvgSearch color="#FFFFFF" />
        </div>
      </div>
    </div>
  );
});

export default SearchBox;
