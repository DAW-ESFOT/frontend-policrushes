import { api } from "./api";

async function get() {
  return await api.get(`user/compatibles`);
}

export const Compatibles = {
  get,
};
