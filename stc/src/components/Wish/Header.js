import {Badge,Container,FormControl, Nav, Navbar,Dropdown} from "react-bootstrap";
//import { CartProvider } from "react-use-cart";
//import { Container, Dropdown } from "semantic-ui-react";

import {FaShoppingCart} from "react-icons/fa";
const Header= () => {
    return (
    <Navbar bg="dark" variant= "dark" style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <a href="/">Shopping Cart</a>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl
                style={{width:500}}
                placeholder="search a product"
                className="m-auto"
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minwidgth:370}}>
                     <span style={{padding:10}}>Cart is empty!</span>

                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
    );

};
export default Header;