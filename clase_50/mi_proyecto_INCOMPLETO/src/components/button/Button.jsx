import PropTypes from "prop-types";
import { Button as ButtonUI } from "@mui/material";
import "./button.scss";

const Button = (props) => {
    const { type, children } = props;

    return (
        <ButtonUI
            className="button"
            type={type}
            variant="contained"
            size="small">
            {children}
        </ButtonUI>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    type: "button",
};

export default Button;