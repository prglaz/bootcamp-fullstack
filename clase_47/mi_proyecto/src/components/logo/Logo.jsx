import { Box } from "@mui/material";
import "./logo.scss";

const Logo = () => {
    return (
        <Box className="logo">
            <img
                src="/images/layout/header-logo.png"
                alt="Logo de la pizzeria" />
        </Box>
    );
};

export default Logo;