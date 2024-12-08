import { Container, Nav, Navbar } from "react-bootstrap";
import { FaPhone, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import "./navbarOne.css"

const NavbarOne = () => {
	return (
		<Navbar expand="lg" className="navbarOne" id="navbarOne">
			<Container style={{maxWidth:"93%"}}>
				<Navbar.Collapse style={{display:"flex"}} id="basic-navbar-nav">
					<Nav style={{flex:1, justifySelf:"start"}}>
						<Nav.Link style={{color:"white"}}><FaPhone className="icons" /> +1 (689) 206-9223</Nav.Link>
						<Nav.Link style={{paddingLeft:"0.5rem", color:"white"}}><GrMail className="icons" /> support@esjare.com</Nav.Link>
					</Nav>
                    <Navbar.Text style={{flex:1, justifySelf:"end", textAlign: "right"}}>
						<a href="" style={{marginRight: "12px"}}><FaFacebookF className="icons" /></a>
						<a href="" style={{marginRight: "12px"}}><FaInstagram className="icons" /></a>
						<a href="" style={{marginRight: "12px"}}><FaLinkedinIn className="icons" /></a>
						<a href="" style={{marginRight: "12px"}}><FaXTwitter className="icons" /></a>
						<a href="" style={{marginRight: "12px"}}><FaYoutube className="icons" /></a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarOne;
