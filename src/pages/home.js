import React, { useEffect, useState } from "react";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { Products } from "../lib/products";
import Button from "@material-ui/core/Button";
import ProductsTable from "@/components/ProductsTable";
import Typography from "@material-ui/core/Typography";


function Home() {
  const { logout } = useAuth();
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
          Products  
        </Typography>
        <ProductsTable rows={products} />
      </div>
    </div>
  );
}

export default withAuth(Home);
