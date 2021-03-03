import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
  label:{
    marginBottom:45
  }
});

function valuetext(value) {
  return `${value}°C`;
}

export default function AgeRange() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        value={value}
        aria-labelledby="discrete-slider-always"
        valueLabelDisplay="on"
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
