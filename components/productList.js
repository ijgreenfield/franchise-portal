import { Grid, GridItem } from "@chakra-ui/react"
import PRODUCTS from "../data";
import Product from './product'
import Link from "next/link";

const productList = PRODUCTS.map((product) => 
    <GridItem>
        <Link href={`/products/${product.handle}`}>
            <a>
                <Product product={product}/>
            </a>
        </Link>
    </GridItem>
)

const ProductList = () => {
    return (
        <Grid w="100%" templateRows="repeat(2, 1fr)" templateColumns="repeat(4, 1fr)" gap={4}>
            {productList}
        </Grid>
    )
}

export default ProductList;