import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    outline: "none",
    position: "absolute",
    width: 400,
    height: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid black",
    borderRadius: 25,
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  genreButton: {
    width: "80%",
    margin: "10px auto",
  },
  buttonWrapper: { display: "flex", flexBasis: "50%" },
  label: { margin: "20px auto" },
}));

export const Trigger = ({ handleOpen, label, style }) => {
  return (
    <Button variant="outlined" onClick={handleOpen}>
      {label}
    </Button>
  );
};

export default function GenrePicker({
  onItemClick,
  selectedGenres,
  genres,
  open,
  handleClose,
}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const _isSelected = (genre) => {
    if (!selectedGenres.includes(genre)) return false;

    return true;
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography className={classes.label} align="center" variant="h3">
        Intereses
      </Typography>
      <div className={classes.content}>
        {genres?.map((genre) => {
          const isSelected = _isSelected(genre);
          return (
            <div key={genre} classname={classes.buttonWrapper}>
              <Button
                onClick={() => {
                  onItemClick(genre);
                }}
                className={classes.genreButton}
                color={isSelected ? "primary" : "primary"}
                variant={isSelected ? "contained" : "outlined"}
              >
                {genre}
              </Button>
            </div>
          );
        })}
      </div>
      <GenrePicker />
    </div>
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
