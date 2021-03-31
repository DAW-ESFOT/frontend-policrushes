import { api } from "./api";
import Cookies from "js-cookie";

async function get() {
  const token = Cookies.get("token");

  return await api.get(`/products`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
}

async function getProduct(id) {
  const token = Cookies.get("token");

  return await api.get(`/products/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
}

export const Products = {
  get,
  getProduct
};
