import React, { useEffect, useState } from "react";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { Products } from "../lib/products";
import Button from "@material-ui/core/Button";
import ProductsTable from "@/components/ProductsTable";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Routes from "@/constants/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: 200,
    display: "flex",
    flexDirection: "column",
  },
  button: { height: 50, margin: "10px 0" },
}));

function Home() {
  const classes = useStyles();
  const { logout } = useAuth();
  const router = useRouter();

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // const products = await Products.get();

    console.log("products", products);
    // setProducts(products.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div style={{ height: 100, width: "100%" }}>
        <Button
          onClick={() => {
            logout();
          }}
        >
          logout
        </Button>
      </div>
      <div
        style={{
          margin: "0 100",
          width: "100%",
        }}
      >
        <Typography align="center" variant="h4" gutterBottom>
          HOME
        </Typography>
        <div className={classes.root}>
          <Button
            className={classes.button}
            onClick={() => {
              router.push(Routes.PRODUCT);
            }}
            color="primary"
            variant="outlined"
          >
            PRODUCTOS
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Home);
