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
import FormHelperText from "@material-ui/core/FormHelperText";
import blue from "@material-ui/core/colors/blue";
import { useForm } from "react-hook-form";
import AgeRange from "../components/AgeRange";
import GenrePicker, { Trigger } from "../components/GenrePicker";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { useAuth } from "@/lib/auth";
import { usePosition } from "../lib/geolocation";
import ErrorMessages from "./ErrorMessages";
import Alert from "@material-ui/lab/Alert";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import SimpleNav from "../components/SimpleNav";
import ModalRules from "@/components/ModalRules";

import { useRouter } from "next/router";
import Routes from "@/constants/routes";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  titleWrapper: { display: "flex", margin: "30px auto" },
  title: { margin: "0 auto" },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  field: {
    margin: 20,
  },
  selector: {
    margin: 13,
  },
  button: {
    color: blue[900],
    margin: 10,
  },
  confirm: {},
}));

export default function PreferencesForm(props) {
  const classes = useStyles();
  const { registerUser } = useAuth();
  const router = useRouter();
  const { register, errors, handleSubmit } = useForm();
  const { position, getCurrentPosition } = usePosition();
  const [locked, setLocked] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");
  const [preferredGender, setPreferredGender] = useState("");
  const [selectedMusic, selectMusic] = useState([]);
  const [selectedMovies, selectMovies] = useState([]);
  const [ageRange, setAgeRange] = useState([20, 37]);
  const [status, setStatus] = useState("none");

  const [messages, setMessages] = useState(null);

  //genres modals
  const [music, showMusic] = useState(false);
  const [movie, showMovie] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = async (data) => {
    //validations
    if (gender === "") {
      alert("Género obligatorio");
      return;
    }

    if (preferredGender === "") {
      alert("Género obligatorio");
      return;
    }

    if (!selectedDate) {
      alert("Fecha de nacimiento obligatoria");
      return;
    }

    if (!image) {
      alert("Imagen obligatoria");
      return;
    }

    setLocked(true);
    const { name, birthdate, description } = data;
    const user = {
      ...props.credentials,
      name,
      description,
      birthdate,
      music_preferences: selectedMusic,
      movie_preferences: selectedMovies,
      image: image,
      gender,
      preferred_gender: preferredGender,
      ...(position ? { lat: position.latitude, lng: position.longitude } : {}),
      max_age: ageRange[0],
      min_age: ageRange[1],
    };

    var form_data = new FormData();

    for (var key in user) {
      if (key == "image") {
        const imageFile = user["image"];

        form_data.append("image", imageFile, imageFile.fileName);
        continue;
      }
      form_data.append(key, user[key]);
    }

    //api request
    try {
      const response = await registerUser(form_data);
      setStatus(response.status);
      setMessages(response.messages);

      props.onConfirm();
      router.push(Routes.HOME);
    } catch (e) {
      console.log(e);
    }
    setLocked(false);
  };

  const handleImage = (image) => {
    setImage(image);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <ModalRules/>
      <SimpleNav />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.titleWrapper}>
          <Typography className={classes.title} component="h1" variant="h4">
            INFORMACION PERSONAL
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ height: 50, margin: "0px auto" }}>
            {locked && (
              <Grid item align="center">
                <CircularProgress color="primary" />
              </Grid>
            )}
          </div>
        </div>
        <ErrorMessages messages={messages} />
        {status === "success" && (
          <Alert severity={"success"}>
            <strong>Registrado correctamente.</strong>
          </Alert>
        )}
        <Grid className={classes.root} container>
          <Grid container>
            <Grid
              container
              direction="column"
              alignItems="center"
              item
              xs={12}
              sm={4}
            >
              <Grid className={classes.field}>
                <TextField
                  type="text"
                  // defaultValue={props.location ? props.location.propData.title : ""}
                  inputRef={register({
                    required: true,
                  })}
                  helperText={
                    errors.name?.type === "required" && "*Nombre obligatorio"
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
                  <DatePicker
                    inputRef={register({
                      required: true,
                    })}
                    helperText={
                      errors.birthdate?.type === "required" &&
                      "*Fecha obligatoria"
                    }
                    name="birthdate"
                    label="Fecha de nacimiento"
                    inputVariant="outlined"
                    views={["date"]}
                    hideTabs={true}
                    format="yyyy-MM-dd hh:mm:ss"
                    minDate={new Date(2020 - 80, 2, 2)}
                    maxDate={new Date(2020 - 18, 2, 2)}
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid className={classes.field}>
                <ImageUpload handleImage={handleImage} cardName="Input Image" />
              </Grid>
              <Grid className={classes.field}>
                <ButtonBase
                  style={{
                    backgroundColor: position ? "#ffa50061" : "lightgray",
                    width: "200px",
                    height: "40px",
                    borderRadius: "7px",
                  }}
                  onClick={getCurrentPosition}
                >
                  <LocationCityOutlined />
                </ButtonBase>
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              alignItems="center"
              item
              xs={12}
              sm={4}
            >
              <Grid className={classes.selector}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Género</InputLabel>
                  <Select
                    inputProps={{
                      name: "gender",
                      id: "uncontrolled-native",
                    }}
                    onChange={handleGender}
                    label="Género"
                    value={gender}
                  >
                    <MenuItem value={"male"}>Hombre</MenuItem>
                    <MenuItem value={"female"}>Mujer</MenuItem>
                  </Select>
                  <FormHelperText>
                    {errors.gender?.type === "required" &&
                      "*Nombre obligatorio"}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid className={classes.selector}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Me interesa</InputLabel>
                  <Select
                    inputProps={{
                      name: "preferrence",
                      id: "uncontrolled-native",
                    }}
                    label="Me interesa"
                    onChange={(event) => {
                      setPreferredGender(event.target.value);
                    }}
                    value={preferredGender}
                  >
                    <MenuItem value={"male"}>Hombre</MenuItem>
                    <MenuItem value={"female"}>Mujer</MenuItem>
                  </Select>
                  <FormHelperText>
                    {errors.preferrence?.type === "required" &&
                      "*Preferencia obligatoria"}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid container className={classes.field}>
                <AgeRange
                  ageRange={ageRange}
                  handleAgeRange={(ageRange) => {
                    setAgeRange(ageRange);
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              alignItems="center"
              item
              xs={12}
              sm={4}
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
              </Grid>
              <Grid className={classes.field}>
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
              sm={4}
            ></Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              item
              xs={12}
              sm={4}
            ></Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              item
              xs={12}
              sm={4}
            >
              <Button
                onClick={props.onBack}
                variant="outlined"
                style={{ marginRight: 12 }}
              >
                Volver
              </Button>
              <Button
                disabled={locked}
                variant="contained"
                color="primary"
                type="submit"
              >
                ok
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
    </>
  );
}
