import { Product } from "@/types/types";
import Image from "next/image";

export default function ProductCard({ id, title, price, description, category, image }: Product) {
    return (
        <li key={id} className="border-2 p-2">
            <Image src={image} alt="product image" width={40} height={20} />
            <h3>{title}</ h3>
            <p className="text-balance">{description}</p>
            <span><p className="text-5xl">{price}</p> <p className="border-amber-200 border-8 rounded-2xl">{category}</p></span>
        </li>
    )
}