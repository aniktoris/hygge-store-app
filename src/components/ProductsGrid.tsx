import { formatAsDollars } from "@/utils/formatAsDollars";
import { ProductsResponse } from "@/utils/types";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

export const ProductsGrid = () => {
  const {data: products} = useLoaderData() as ProductsResponse;
  
  return (
    <div>
      {products.map((product) => {
        const {title, price, image} = product.attributes;
        const dollarsAmount = formatAsDollars({price: price});

        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className='p-4'>
            <img
            src={image}
            alt={title}
            className="rounded-md h-64 md:h-48 w-full object-cover"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold capitalize">{title}</h2>
              <p className="text-primary font-light mt-2">{dollarsAmount}</p>
            </div>
            </CardContent>
            </Card>
          </Link>
        )
      })
      }</div>
  )
}
