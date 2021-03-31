import React, { useEffect } from "react";
import { Products } from "@/lib/products";
import ProductComponent from "@/components/Product";

export default function Product(props) {
  useEffect(() => {
    console.log("props", props);
  });
  return <ProductComponent product={props.product} />;
}

export async function getStaticProps(context) {
  const { id } = context.params;
  try {
    const product = await Products.getProduct(id);

    if (!product.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product: product.data,
      },
    };
  } catch (error) {
    return {
      props: {
        product: null,
      },
    };
  }
}

export async function getStaticPaths() {
  const products = await Products.get();

  console.log("products.data:", products.data);
  const paths = products.data.map((product) => {
    return { params: { id: "" + product.id } };
  });

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}
