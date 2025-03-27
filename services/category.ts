import { data } from "../data";

export const getAllCategories = () => data.categories;
export const getCategoryById = (id: number) => data.categories.find((category) => category.id === id);