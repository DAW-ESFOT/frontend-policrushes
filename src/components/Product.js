import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Product(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <div>
        {props.product ? (
          <CardContent>
            <Typography
              variant="h3"
              align="center"
              style={{ marginBottom: 30 }}
              //   gutterBottom
            >
              {props.product.name}
            </Typography>
            <div style={{ fontWeight: "bold", marginBottom: 10 }}>CODE:</div>
            <Typography className={classes.pos}>
              {props.product.code}
            </Typography>
            <div style={{ fontWeight: "bold", marginBottom: 10 }}>PRICE :</div>
            <Typography variant="subtitle1">$ {props.product.price}</Typography>
            <div>
              <div
                style={{ fontWeight: "bold", marginBottom: 20, marginTop: 10 }}
              >
                SUPPLIERS :
              </div>
              {props.product.suppliers.map((supplier, index) => (
                <Supplier
                  key={supplier.id}
                  supplier={supplier}
                  index={index}
                  length={props.product.suppliers.length}
                />
              ))}
            </div>
          </CardContent>
        ) : (
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Not found
            </Typography>
          </CardContent>
        )}
      </div>
    </Card>
  );
}

const Supplier = ({ supplier, index, length }) => {
  return (
    <>
      <ListItem button>
        <ListItemText primary={supplier.name} />
      </ListItem>
      {index === length - 1 ? <></> : <Divider />}
    </>
  );
};
