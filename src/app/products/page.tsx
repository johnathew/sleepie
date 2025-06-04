import { getProducts } from "@/lib/products"
import ProductCard from "@/components/ProductCard"
import Link from "next/link"
export default async function Page() {
    const products = await getProducts()

    if (!products) {
        return []
    }
    return (
        <>
            <Link href="/" className="hover:underline underline-offset-2"> &lsaquo; Go back home </Link>
            <ul>
                {products?.map((item) => {
                    return (
                        <ProductCard
                            category={item.category}
                            description={item.description}
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            title={item.title}
                            key={item.id} />
                    )
                })}
            </ul>
        </>
    )
}