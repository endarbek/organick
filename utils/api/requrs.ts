import { ProductResponse, ProductsResponse } from "@/types/products";
import ky from "ky";

const strapi = ky.create({ prefixUrl: process.env.STRAPI });

export const fetchProducts = (): Promise<ProductsResponse> => {
  return strapi.get("products?populate=image").json();
};

export const fetchProduct = (id: number): Promise<ProductResponse> => {
  return strapi.get(`products/${id}?populate=image`).json();
};
