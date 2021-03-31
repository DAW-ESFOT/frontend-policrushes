import React, { useEffect, useState } from "react";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { Products } from "@/lib/products";
import Button from "@material-ui/core/Button";
import ProductsTable from "@/components/ProductsTable";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: { height: 50, margin: "10px 0" },
}));

export async function getStaticProps() {
  const products = await Products.get();
  return {
    props: {
      products: products.data,
    },
  };
}

function Index(props) {
  const classes = useStyles();
  const { logout } = useAuth();
  const [products, setProducts] = useState(props?.products || []);

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
          Products
        </Typography>
        <ProductsTable rows={products} />
      </div>
    </div>
  );
}

export default withAuth(Index);
