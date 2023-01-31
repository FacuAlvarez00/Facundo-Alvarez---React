import React from "react";
import styles from "./button.module.css";

// useEffect

export default function Button(props) {

  



  return (
    <button onClick={props.onAdd} className={styles.btn}>
      {props.children}
    </button>
  );
}
