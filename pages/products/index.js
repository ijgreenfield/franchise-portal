import ProductList from "../../components/productList";
import Header from "../../components/header"
import { Container, Button } from "@chakra-ui/react";
import Stripe from 'stripe';
import Link from "next/link";


export default function Shop({ products=[] }) {
    return (
        <>
            <Header />
            <Container maxW="1280px">
                {products.map(product => 
                    <Link key={product.id} href={`products/${product.id}`}>
                        <a>
                            <h1>{product.name}</h1>   
                        </a>
                    </Link>
                    )}
            </Container>
        </>
    )
}


export async function getServerSideProps() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const { data: products} = await stripe.products.list({
        active: true,
    })

    return {
        props: {
            products,
        }
    }

}