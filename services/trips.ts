import { data } from "../data";

export const getAllTrips = () => data.trips;
export const getTripById = (id: number) => data.trips.find((product) => product.id === id);
export const getTripsByCategory = (idCategory: number) => data.trips.filter((product) => product.idCategory === idCategory);