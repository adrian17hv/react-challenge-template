import { House } from "@/types/houseTypes";
import axiosClient from "../axiosClient";

interface FetchHousesParams {
  page?: number;
  per_page?: number;
}

export interface HouseResponse {
  houses: House[]
}

export const fetchHouses = async ({ page = 1, per_page = 10 }: FetchHousesParams) => {
  try {
    const response = await axiosClient.get<HouseResponse>("", {
      params: { page, per_page },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
