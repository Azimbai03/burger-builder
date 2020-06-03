import React from "react";
import classes from "./BurgerControl.module.css";
import { useDispatch } from "react-redux";
import { remove, add } from "../../../../Store/actions/builder";

export default ({ label, ingredient, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.BurgerControl}>
      <button
        className={classes.less}
        onClick={() => remove(dispatch, ingredient)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{label}</span>
      <button
        className={classes.more}
        onClick={() => add(dispatch, ingredient)}
      >
        +
      </button>
    </div>
  );
};