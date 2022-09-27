import ProtectedRoute from "../components/ProtectedRoute";
import Product from '../components/product'
import PRODUCTS from "../data";
import ProductList from "../components/productList";
import Header from "../components/header"
import { Container } from "@chakra-ui/react";

const listItems = PRODUCTS.map(item => 
    <h1 key={item.handle}>{item.name}</h1>
)

const Portal = () => {
    return (
        <ProtectedRoute>
            <Header />
            <Container maxW="1280px">
                <ProductList />
            </Container>
        </ProtectedRoute>
    )
}

export default Portal;