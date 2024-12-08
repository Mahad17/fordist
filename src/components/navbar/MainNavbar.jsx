import { memo, useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import esjareLogo from "../../assets/esjareLogoLight.png";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import "./mainNavbar.css";

const MainNavbar = () => {
	const navigate = useNavigate();
	const [showServicesDropdown, setShowServicesDropdown] = useState(false);
	const [showAboutDropdown, setShowAboutDropdown] = useState(false);

	const navbarRef = useRef(null);
	const navbarAboutRef = useRef(null);
	const navbarServicesRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const navbar = navbarRef.current;
			const navbarAbout = navbarAboutRef.current;
			const navbarServices = navbarServicesRef.current;

			const scrollPosition = window.scrollY;
			const viewportHeight = window.innerHeight * 0.01;

			if (scrollPosition > viewportHeight) {
				navbar && navbar.classList.add("sticky");
				navbarAbout && navbarAbout.classList.add("sticky");
				navbarServices && navbarServices.classList.add("sticky");
			} else {
				navbar && navbar.classList.remove("sticky");
				navbarAbout && navbarAbout.classList.remove("sticky");
				navbarServices && navbarServices.classList.remove("sticky");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Navbar expand="lg" id="mainNavbar" ref={navbarRef} className="py-1">
				<Container id="mainNavbarContainer">
					<Navbar.Brand>
						<NavLink to="/#home">
							<img
								alt="EsJare"
								src={esjareLogo}
								width="62"
								height="62"
								className="d-inline-block align-top"
							/>
						</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-navOne"
						className="justify-content-end"
					>
						<Nav>
							<Nav.Link>
								<NavLink
									to="/#home"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "active" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									onClick={() => {
										setShowServicesDropdown(false);
										setShowAboutDropdown(false);
									}}
								>
									Home
								</NavLink>
							</Nav.Link>
							<NavDropdown
								title={
									<>
										About{" "}
										<span>
											<IoMdArrowDropdown
												className={`dropdown-arrow ${
													showAboutDropdown ? "arrow-up" : "arrow-down"
												}`}
											/>
										</span>
									</>
								}
								id="basic-navbar-navOne"
								className="aboutDropdown"
								show={showAboutDropdown}
								onClick={() => {
									// Explicitly toggle the About dropdown state
									const newState = !showAboutDropdown;
									setShowAboutDropdown(newState);

									// navigate("/about")
									// Close the Services dropdown
									setShowServicesDropdown(false);
								}}
							>
								<NavDropdown.Item>
									<NavLink
										to="/about#ourhistory"
										className={({ isActive, isPending, isTransitioning }) =>
											[
												isPending ? "pending" : "",
												isActive ? "notActive" : "notActive",
												isTransitioning ? "transitioning" : "",
											].join(" ")
										}
										onClick={() => {
											setShowAboutDropdown(false); // Close the dropdown on click
										}}
									>
										Our History
									</NavLink>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<NavLink
										to="/about#mission"
										className={({ isActive, isPending, isTransitioning }) =>
											[
												isPending ? "pending" : "",
												isActive ? "notActive" : "notActive",
												isTransitioning ? "transitioning" : "",
											].join(" ")
										}
										onClick={() => {
											setShowAboutDropdown(false); // Close the dropdown on click
										}}
									>
										Our Mission
									</NavLink>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<NavLink
										to="/about#whychoose"
										className={({ isActive, isPending, isTransitioning }) =>
											[
												isPending ? "pending" : "",
												isActive ? "notActive" : "notActive",
												isTransitioning ? "transitioning" : "",
											].join(" ")
										}
										onClick={() => {
											setShowAboutDropdown(false); // Close the dropdown on click
										}}
									>
										Why Choose Us
									</NavLink>
								</NavDropdown.Item>{" "}
							</NavDropdown>

							<NavDropdown
								href="/services"
								title={
									<>
										Services{" "}
										<span>
											<IoMdArrowDropdown
												className={`dropdown-arrow ${
													showServicesDropdown ? "arrow-up2" : "arrow-down2"
												}`}
											/>
										</span>
									</>
								}
								className="servicesDropdown"
								id="basic-nav-dropdownTwo"
								show={window.innerWidth < 992 && showServicesDropdown}
								onClick={(e) => {
									e.preventDefault();
									setShowServicesDropdown((prev) => !prev);
									setShowAboutDropdown(false); // Close other dropdown
								}}
							>
								<NavDropdown.Item>
									<NavLink
										to="/apm"
										className={({ isActive, isPending, isTransitioning }) =>
											[
												isPending ? "pending" : "",
												isActive ? "active" : "notActive",
												isTransitioning ? "transitioning" : "",
											].join(" ")
										}
									>
										AI-Driven Patient Mon...
									</NavLink>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<NavLink
										to="/cdsmb"
										className={({ isActive, isPending, isTransitioning }) =>
											[
												isPending ? "pending" : "",
												isActive ? "active" : "notActive",
												isTransitioning ? "transitioning" : "",
											].join(" ")
										}
									>
										Custom Data Science...
									</NavLink>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<NavLink
										to="/iaas"
										className={({ isActive, isPending, isTransitioning }) =>
											[
												isPending ? "pending" : "",
												isActive ? "active" : "notActive",
												isTransitioning ? "transitioning" : "",
											].join(" ")
										}
									>
										Integrated AI for Amb...
									</NavLink>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<NavLink
										to="/npl"
										className={({ isActive, isPending, isTransitioning }) =>
											[
												isPending ? "pending" : "",
												isActive ? "active" : "notActive",
												isTransitioning ? "transitioning" : "",
											].join(" ")
										}
									>
										Natural Processing La...
									</NavLink>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<NavLink
										to="/pam"
										className={({ isActive, isPending, isTransitioning }) =>
											[
												isPending ? "pending" : "",
												isActive ? "active" : "notActive",
												isTransitioning ? "transitioning" : "",
											].join(" ")
										}
									>
										Predictive Analytics M...
									</NavLink>
								</NavDropdown.Item>

								<NavDropdown.Item>
									<NavLink
										to="/otherservices"
										className={({ isActive, isPending, isTransitioning }) =>
											[
												isPending ? "pending" : "",
												isActive ? "active" : "notActive",
												isTransitioning ? "transitioning" : "",
											].join(" ")
										}
									>
										Other Services
									</NavLink>
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link>
								<NavLink
									to="/contact/#contact-us"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "active" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									onClick={() => {
										setShowServicesDropdown(false);
										setShowAboutDropdown(false);
									}}
								>
									Contact Us
								</NavLink>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/* {showAboutDropdown && (
				<div
					id="servicesBigDropdownOne"
					ref={navbarAboutRef}
					className="servicesBigDropdown"
				>
					<div>
						<NavLink
							to="/about/#ourhistory"
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? "pending" : "",
									isActive ? "active" : "notActive",
									isTransitioning ? "transitioning" : "",
								].join(" ")
							}
							id="dropdownLinks"
							onClick={() => {
								setShowAboutDropdown(false);
							}}
						>
							Our History
						</NavLink>

						<NavLink
							to="/about/#mission"
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? "pending" : "",
									isActive ? "active" : "notActive",
									isTransitioning ? "transitioning" : "",
								].join(" ")
							}
							id="dropdownLinks"
							onClick={() => {
								setShowAboutDropdown(false);
							}}
						>
							Our Mission
						</NavLink>

						<NavLink
							to="/about/#whychoose"
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? "pending" : "",
									isActive ? "active" : "notActive",
									isTransitioning ? "transitioning" : "",
								].join(" ")
							}
							id="dropdownLinks"
							onClick={() => {
								setShowAboutDropdown(false);
							}}
						>
							Why Choose Us
						</NavLink>
					</div>
				</div>
			)} */}

			{/* services dropdown */}
			{window.innerWidth > 991 && showServicesDropdown && (
				<div
					id="servicesBigDropdownTwo"
					ref={navbarServicesRef}
					className="servicesBigDropdown"
				>
					{/* ai driven service */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
							padding: "1.5rem 0rem 1.5rem 2rem",
							width: "max-content",
							marginLeft: "1rem",
							borderBottomLeftRadius: "10px",
						}}
					>
						<h4 style={{ color: "#0072CE" }}>AI-Driven Sevices</h4>
						<NavLink
							to="/apm"
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? "pending" : "",
									isActive ? "active" : "notActive",
									isTransitioning ? "transitioning" : "",
								].join(" ")
							}
							id="dropdownLinksTwo"
							onClick={() => setShowServicesDropdown(false)}
						>
							AI-Driven Patient Monitoring
						</NavLink>

						<NavLink
							to="/cdsmb"
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? "pending" : "",
									isActive ? "active" : "notActive",
									isTransitioning ? "transitioning" : "",
								].join(" ")
							}
							id="dropdownLinksTwo"
							onClick={() => setShowServicesDropdown(false)}
						>
							Custom Data Science Model Builder
						</NavLink>

						<NavLink
							to="/iaas"
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? "pending" : "",
									isActive ? "active" : "notActive",
									isTransitioning ? "transitioning" : "",
								].join(" ")
							}
							id="dropdownLinksTwo"
							onClick={() => setShowServicesDropdown(false)}
						>
							Integrated AI for Ambulance Services
						</NavLink>

						<NavLink
							to="/npl"
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? "pending" : "",
									isActive ? "active" : "notActive",
									isTransitioning ? "transitioning" : "",
								].join(" ")
							}
							id="dropdownLinksTwo"
							onClick={() => setShowServicesDropdown(false)}
						>
							Natural Processing Language
						</NavLink>

						<NavLink
							to="/pam"
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? "pending" : "",
									isActive ? "active" : "notActive",
									isTransitioning ? "transitioning" : "",
								].join(" ")
							}
							id="dropdownLinksTwo"
							onClick={() => setShowServicesDropdown(false)}
						>
							Predictive Analytics Models
						</NavLink>
					</div>

					{/* other services */}
					<div
						style={{
							width: "max-content",
							padding: "1.5rem 3rem",
							borderBottomRightRadius: "10px",
						}}
					>
						<h4 style={{ color: "#0072CE" }}>Other Sevices</h4>
						<div style={{ display: "flex", background: "transparent" }}>
							{/* other services sub div one */}
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									width: "50%",
									padding: "10px 0px",
									background: "transparent",
								}}
							>
								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									Business Intelligence & Analytics
								</NavLink>

								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									Cloud Services & Virtualization
								</NavLink>

								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									Cybersecurity Solutions
								</NavLink>

								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									Digital Marketing Services
								</NavLink>

								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									IT Consulting & Strategy
								</NavLink>
							</div>

							{/* other services sub div Two */}
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									width: "50%",
									padding: "10px 0px",
									background: "transparent",
									marginRight: "0.5rem",
								}}
							>
								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									Machine Learning & AI Development
								</NavLink>

								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									Managed IT Services & Support
								</NavLink>

								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									Network Setup & IoT Services
								</NavLink>

								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									Software & Application Development
								</NavLink>

								<NavLink
									to="/otherservices/#services"
									className={({ isActive, isPending, isTransitioning }) =>
										[
											isPending ? "pending" : "",
											isActive ? "notActive" : "notActive",
											isTransitioning ? "transitioning" : "",
										].join(" ")
									}
									id="dropdownLinksTwo"
									onClick={() => setShowServicesDropdown(false)}
								>
									System Integration & Infrastructure Management
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default memo(MainNavbar);
