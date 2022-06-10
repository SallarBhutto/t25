import { baseUrl, products } from "../../utils/urls";
import axios from "axios";

export const getProductsApi = async (pageNo?: string) => {
    try {
        const response: any = await axios.get(`${baseUrl}${products}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}