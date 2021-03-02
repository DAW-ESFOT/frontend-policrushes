import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import LocationCityOutlined from "@material-ui/icons/LocationCityOutlined";
import Fab from "@material-ui/core/Fab";
import blue from "@material-ui/core/colors/blue";

import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  form: {
    margin:"auto 100px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  field: {
    margin: 20,
  },
  slice: {
  },
  button: {
    color: blue[900],
    margin: 10,
  },
  confirm:{
    marginLeft:30 ,
  }
}));

export default function PreferencesForm() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [image, setImage] = useState(null);
  const [gender, setGender] = useState(null);
  const [preferredGender, setPreferredGender] = useState(null);

  useEffect(() => {
    if (!image) return;
    console.log("image selected", image);
  }, [image]);

  const handleImage = (event) => {
    if (!event?.target?.value) return;
    setImage(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <Grid classes={classes.root} container>
      <Grid container className={classes.form}>
        <Grid
          container
          direction="column"
          alignItems="left"
          className={classes.slice}
          item
          xs={12}
          sm={6}
        >
          <Grid className={classes.field}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="name"
              label="Nombre"
              name="name"
              autoComplete="name"
              autoFocus
            />
          </Grid>
          <Grid className={classes.field}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                label="Fecha de nacimiento"
                inputVariant="outlined"
                disableToolbar
                format="MM/dd/yyyy"
                margin="normal"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid className={classes.field}>
            <ImageUpload handleImage={handleImage} cardName="Input Image" />
          </Grid>
          <Grid className={classes.field}>
            <Fab component="span" className={classes.button}>
              <LocationCityOutlined />
            </Fab>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="left"
          className={classes.slice}
          item
          xs={12}
          sm={6}
        >
          <Grid className={classes.field}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Género</InputLabel>
              <Select
                labelId="propGender"
                onChange={handleGender}
                label="Género"
                value={gender}
              >
                <MenuItem value={"male"}>Hombre</MenuItem>
                <MenuItem value={"female"}>Mujer</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid className={classes.field}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Me interesa</InputLabel>
              <Select
                labelId="propGender"
                label="Me interesa"
                onChange={(event) => {
                  setPreferredGender(event.target.value);
                }}
                value={preferredGender}
              >
                <MenuItem value={"male"}>Hombre</MenuItem>
                <MenuItem value={"female"}>Mujer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid className={classes.confirm}>
            <Button variant="contained">Confirmar</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
