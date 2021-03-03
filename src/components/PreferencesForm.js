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
import { useForm } from "react-hook-form";
import { Auth } from "../lib/auth";
import AgeRange from "../components/AgeRange";
import GenrePicker, { Trigger } from "../components/GenrePicker";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";

const intercalate = (array, element) => {
  const isSelected = array.includes(element);
  if (isSelected) {
    return array.filter((elem) => elem != element);
  }
  return [...array, element];
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "auto 100px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  field: {
    margin: 20,
  },
  button: {
    color: blue[900],
    margin: 10,
  },
  confirm: {},
}));

export default function PreferencesForm({ switchScreen }) {
  const classes = useStyles();
  const { register, errors, handleSubmit, setValue } = useForm();

  const [selectedDate, setSelectedDate] = React.useState(new Date(2001, 2, 2));
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");
  const [preferredGender, setPreferredGender] = useState("");
  const [selectedMusic, selectMusic] = useState([]);
  const [selectedMovies, selectMovies] = useState([]);

  //genres modals
  const [music, showMusic] = useState(false);
  const [movie, showMovie] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = async (data) => {
    const { name, birthdate, description } = data;
    const user = {
      name,
      description,
      music_preferences: selectedMusic,
      movie_preferences: selectedMovies,
      birthdate,
    };
    console.log('user:',user)
    // Auth.register(user);
  };

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid classes={classes.root} container>
        <Grid container>
          <Grid
            container
            direction="column"
            alignItems="center"
            item
            xs={12}
            sm={6}
          >
            <Grid className={classes.field}>
              <TextField
                type="text"
                // defaultValue={props.location ? props.location.propData.title : ""}
                inputRef={register({
                  required: true,
                })}
                helperText={
                  errors.title?.type === "maxLength" && "título olbigatorio"
                }
                variant="outlined"
                id="name"
                name="name"
                label="Nombre"
                autoComplete="billing address-line1"
                variant="outlined"
              />
            </Grid>
            <Grid className={classes.field}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  inputRef={register({
                    required: true,
                  })}
                  name="birthdate"
                  label="Fecha de nacimiento"
                  inputVariant="outlined"
                  views={["date"]}
                  hideTabs={true}
                  format="Y-m-d H:i:s"
                  maxDate={new Date(2020 - 18, 3 - 1, 2)}
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
            alignItems="center"
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
            <Grid justify="left" className={classes.field}>
              <AgeRange />
            </Grid>
            <Grid className={classes.field}>
              <TextField
                type="text"
                // defaultValue={props.location ? props.location.propData.title : ""}
                inputRef={register({
                  required: true,
                })}
                helperText={
                  errors.title?.type === "maxLength" && "título olbigatorio"
                }
                variant="outlined"
                id="description"
                name="description"
                label="Acerca de mí"
                autoComplete="billing address-line1"
                variant="outlined"
              />
            </Grid>

            <Grid className={classes.field}>
              <Trigger
                label="musica"
                handleOpen={() => {
                  showMusic(true);
                }}
              />
              <Trigger
                label="películas"
                handleOpen={() => {
                  showMovie(true);
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          style={{ height: 100, width: "100%" }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            item
            xs={12}
            sm={6}
          ></Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            xs={12}
            sm={6}
          >
            <Button
              onClick={switchScreen}
              variant="outlined"
              style={{ marginRight: 12 }}
            >
              Volver
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Confirmar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <GenrePicker
        genres={["rock", "urban", "punk", "electro", "country"]}
        selectedGenres={selectedMusic}
        onItemClick={(genre) => {
          selectMusic(intercalate(selectedMusic, genre));
        }}
        open={music}
        handleClose={() => {
          showMusic(false);
        }}
      />
      <GenrePicker
        genres={["terror", "romance", "comedia"]}
        selectedGenres={selectedMovies}
        onItemClick={(genre) => {
          selectMovies(intercalate(selectedMovies, genre));
        }}
        open={movie}
        handleClose={() => {
          showMovie(false);
        }}
      />
    </form>
  );
}
