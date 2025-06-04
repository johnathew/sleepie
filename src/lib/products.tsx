import { Product } from "@/types/types";

export async function getProducts(): Promise<Product[]> {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        if (Array.isArray(data)) {
            return data as Product[];
        } else {
            return [];
        }
    }
    catch (error) {
        console.log("Error: ", error)
        return []
    }

}