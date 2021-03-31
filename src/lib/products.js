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

export const Products = {
  get,
};
