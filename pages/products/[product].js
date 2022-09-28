import { Button } from '@chakra-ui/react'
import Stripe from 'stripe'

export default function ProductPage({product}) {
    return (
        <>
            <h1>Hey Man!</h1>
            <p>{product.name}</p>
            <Button onClick={() => console.log(product)}></Button>
        </>

    )
}

export async function getProductData() {

}

export async function getStaticPaths() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const { data: products} = await stripe.products.list({
        active: true,
    })

    const paths = products.map((product) => ({
        params: {product: product.id}
    }) )

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const { data: products} = await stripe.products.list({
        active: true,
    })  

    const product = products.find((x) => x.id == params.product)

    return {
        props: {
            product
        }
    }
}

