import { BlogResponse, BlogsResponse } from "@/types/blogs";
import { ExpertResponse } from "@/types/experts";
import { OrganicItemResponse, OrganicResponse } from "@/types/organic";
import { ProductResponse, ProductsResponse } from "@/types/products";
import { SlidersResponse } from "@/types/slider";
import ky from "ky";
import qs from "qs";

const strapi = ky.create({ prefixUrl: process.env.STRAPI, cache: "no-cache" });

const queryProduct = qs.stringify({
  populate: {
    related: {
      populate: {
        image: true,
        categories: true,
      },
      limit: 4,
    },
    image: true,
    categories: true,
  },
});

export const fetchProducts = (): Promise<ProductsResponse> => {
  return strapi.get("products?populate=image,categories").json();
};
export const fetchProduct = (id: number): Promise<ProductResponse> => {
  return strapi.get(`products/${id}?${queryProduct}`).json();
};
export const fetchSliders = (): Promise<SlidersResponse> => {
  return strapi.get("sliders?populate=image").json();
};
export const fetchBlogs = (): Promise<BlogsResponse> => {
  return strapi.get("blogs?populate=image").json();
};
export const fetchBlog = (id: number): Promise<BlogResponse> => {
  return strapi.get(`blogs/${id}?populate=image`).json();
};
export const fetchProductsRecomended = (): Promise<ProductsResponse> => {
  return strapi
    .get("products?filters[recomended][$eq]=true&populate=image")
    .json();
};
export const fetchOrganics = (): Promise<OrganicResponse> => {
  return strapi.get("organics?populate=image").json();
};
export const fetchOrganic = (id: number): Promise<OrganicItemResponse> => {
  return strapi.get(`organics/${id}?populate=image`).json();
};
export const fetchExperts = (): Promise<ExpertResponse> => {
  return strapi.get("experts?populate=image").json();
};
