import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
    margin: "0 auto",
  },
  label: {
    marginLeft: 15,
    marginBottom: 45,
    fontSize: "0.85rem",
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function AgeRange({ ageRange, handleAgeRange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.label}
        color="textSecondary"
        id="range-slider"
        gutterBottom
      >
        Edad
      </Typography>
      <Slider
        value={ageRange}
        aria-labelledby="discrete-slider-always"
        valueLabelDisplay="on"
        onChange={(event, ageRange) => {
          handleAgeRange(ageRange);
        }}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
