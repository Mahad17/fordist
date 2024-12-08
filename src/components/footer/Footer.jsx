import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import "./footer.css";
const Footer = () => {
	return (
		<>
			<section className="footerSection">
				<div
					className="row"
					style={{ padding: "2rem 2rem 0rem 2rem", margin: "0px" }}
				>
					<div className="col col-lg-4 col-md-6 col-sm-12 col-12">
						<h3 style={{ color: "#0072CE", fontWeight: "700" }}>About Us</h3>
						<p className="pe-1" style={{ fontWeight: "500" }}>
							EsJare is an Al and IT solutions provider dedicated to
							transforming industries through custom data science, advanced
							analytics, and strategic technology services. Our expertise spans
							healthcare. cybersecurity, cloud solutions, and beyond-empowering
							organizations with Al-driven insights, robust security, and
							seamless system integration. Committed to enhancing operational
							efficiency and patient care, we deliver customized, high-impact
							solutions tailored to each client's unique needs.
						</p>
					</div>
					<div style={{display:"flex", justifyContent:"center"}} className="col col-lg-4 col-md-3 col-sm-6 col-6">
						<div>
							<h3 style={{ color: "#0072CE", fontWeight: "700" }}>
								Quick Links
							</h3>
							<ul style={{ fontWeight: "500" }}>
								<li>
									<Link
										to="/#home"
										style={{ textDecoration: "none", color: "#212529" }}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/about/#about-us"
										style={{ textDecoration: "none", color: "#212529" }}
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to="/contact/#contact-us"
										style={{ textDecoration: "none", color: "#212529" }}
									>
										Contact Us
									</Link>
								</li>
								<li>
									<Link
										to="/career/#join-us"
										style={{ textDecoration: "none", color: "#212529" }}
									>
										Careers
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col col-lg-4 col-md-3 col-sm-6 col-6">
						<h3 style={{ color: "#0072CE", fontWeight: "700" }}>Important</h3>
						<ul style={{ fontWeight: "500" }}>
							<li>
								<Link style={{ textDecoration: "none", color: "#212529" }}>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link style={{ textDecoration: "none", color: "#212529" }}>
									Cookies
								</Link>
							</li>
							<li>
								<Link style={{ textDecoration: "none", color: "#212529" }}>
									Terms of use
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="row pb-3" style={{ padding: "0rem 2rem 0rem 2rem" }}>
					<div
						className="col-12"
						style={{ display: "flex", justifyContent: "center" }}
					>
						<a href="#" style={{ marginRight: "12px" }}>
							<FaFacebookF fill="#0072CE"/>
						</a>
						<a href="#" style={{ marginRight: "12px" }}>
							<FaInstagram fill="#0072CE"/>
						</a>
						<a href="#" style={{ marginRight: "12px" }}>
							<FaLinkedinIn fill="#0072CE"/>
						</a>
						<a href="#" style={{ marginRight: "12px" }}>
							<FaXTwitter fill="#0072CE"/>
						</a>
						<a href="#" style={{ marginRight: "12px" }}>
							<FaYoutube fill="#0072CE"/>
						</a>
					</div>
				</div>

				<div
					className="row p-3"
					style={{ margin: 0, width: "100%", background: "#0072CE" }}
				>
					<div
						className="col-12"
						style={{ textAlign: "center", color: "white", fontWeight: "600" }}
					>
						Copyright 2024 EsJare, All Rights Reserved.
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
