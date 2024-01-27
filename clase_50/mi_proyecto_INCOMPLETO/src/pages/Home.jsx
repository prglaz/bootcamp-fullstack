import { useState } from "react";
import { Box } from "@mui/material";
import ProductCard from "../components/productCard/ProductCard";

const Home = () => {
    const [products, setProducts] = useState([]);
    const IT_IS_OFF = 10.0;

    return (
        <Box className="home">
            <Box
                component="section"
                className="home_section">
                <Box
                    className="home_section__search">
                    <h3>Productos</h3>
                </Box>
                <Box
                    className="home_section__cards">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            setProducts={setProducts}
                            itIsOff={IT_IS_OFF} />
                    ))}

                </Box>
            </Box>
        </Box>
    );
};

export default Home;