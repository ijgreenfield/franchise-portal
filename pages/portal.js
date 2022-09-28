import PRODUCTS from "../data";
import Header from "../components/header"
import { Container, Heading } from "@chakra-ui/react";

const listItems = PRODUCTS.map(item => 
    <h1 key={item.handle}>{item.name}</h1>
)

const Portal = () => {
    return (
        <>
            <Header />
            <Container maxW="1280px">
                <Heading>Portal Home</Heading>
            </Container>
        </>
    )
}

export default Portal;