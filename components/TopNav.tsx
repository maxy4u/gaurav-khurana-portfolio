import { memo, FC } from "react";
import { Tnavigation } from "../constants";
import styles from "../styles/TopNav.module.css";


export type TTopNav = {
    navigation: Tnavigation
}

const TopNav :  FC<TTopNav>  = ({ navigation }) => {
    return (
    <ul className={styles.navigation}>
        {Object.keys(navigation).map((key, ind)=>(<li key={`nav-item-${ind}`}>{navigation[key as keyof typeof navigation]}</li>))}
    </ul>) ;
}

export default memo(TopNav);