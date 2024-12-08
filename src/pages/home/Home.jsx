import "./home.css";
import video from "../../assets/video.mp4";
import CardComp from "../../components/card/Card";
import cardImageOne from "../../assets/nlpCard.jpg";
import cardImageTwo from "../../assets/pamCard.jpg";
import cardImageThree from "../../assets/apmCard.png";
import cardImageFour from "../../assets/cdsmbCard.webp";
import cardImageFive from "../../assets/iaasCard.jpg";
import cardImageSix from "../../assets/otherServicesCard.jpg";
import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const cardData = [
	{
		image: cardImageOne,
		heading: "Natural Language Processing (NLP)",
		text: "Hacking, loss of data, and liabilities for compliance issues that may cause a business owner to have sleepless nights.",
		navigate: "/npl",
	},
	{
		image: cardImageTwo,
		heading: "Predictive Analytics Models",
		text: "A critical business call can occur at any time, regardless of where you are—at the airport, in your home office, or during your commute.",
		navigate: "/pam",
	},
	{
		image: cardImageThree,
		heading: "AI-Driven Patient Monitoring",
		text: "Do you worry that your data isn't properly backed up? That either your backups don't include important files or aren't scheduled frequently enough?",
		navigate: "/apm",
	},
	{
		image: cardImageFour,
		heading: "Custom Data Science Model Builder",
		text: "In order to provide comprehensive and effective IT support for any organization, we embrace a wide range of services and techniques.",
		navigate: "/cdsmb",
	},
	{
		image: cardImageFive,
		heading: "Integrated AI for Ambulance Services",
		text: "Computer migration is the process of moving information from one computer or system to another including files, programs, settings, and configurations.",
		navigate: "/iaas",
	},
	{
		image: cardImageSix,
		heading: "Other Services",
		text: "Computer migration is the process of moving information from one computer or system to another including files, programs, settings, and configurations.",
		navigate: "/otherservices",
	},
];

const Home = () => {
	const location = useLocation();

	useEffect(() => {
		// Check if the URL contains a hash
		if (location.hash) {
			const targetId = location.hash.substring(1); // Remove the '#' from the hash
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the element
			}
		}
	}, [location]);

	return (
		<>
			<section id="home" className="homeSectionOne">
				<div className="homeDivOne" style={{ width: "100%" }}>
					<video autoPlay muted loop id="myVideo">
						<source src={video} type="video/mp4" />
					</video>

					<div className="content">
						<p>
							EsJare is at the forefront of AI advancements in healthcare,
							driving change in patient care, resource optimization, and
							emergency response. By creating preemptive AI models, we help
							reduce patient risk, improve outcomes, and deliver life-saving
							interventions before crises emerge.
						</p>
					</div>
				</div>

				<div className="homeDivTwo">
					<div style={{ padding: "2rem 2rem 0.5rem 2rem" }}>
						<h1>Services we provide</h1>
						<p style={{ fontSize: "large", textAlign: "justify" }}>
							Our AI powered platform provides cutting-edge solutions across
							industries, including healthcare, finance, and emergency services.
							Key offerings include:
						</p>
					</div>

					<div
						style={{
							padding: "1.5rem",
							boxSizing: "border-box",
							width: "100%",
							margin: "0px",
						}}
						className="row d-flex justify-content-center"
					>
						<div
							style={{ boxSizing: "border-box !important" }}
							className="col col-lg-4 col-md-6 col-sm-12 col-12 px-4"
						>
							<h2>Proactive Support</h2>
							<p>
								At EsJare, we adopt a proactive approach to IT support across
								various industries, including healthcare, finance, and emergency
								services. Our team monitors systems around the clock,
								identifying and resolving potential issues before they impact
								operations. Prioritizing preventative maintenance and continuous
								monitoring, we help maximize uptime and minimize disruptions for
								critical business functions.
							</p>
						</div>
						<div
							style={{ boxSizing: "border-box !important" }}
							className="col col-lg-4 col-md-6 col-sm-12 col-12 px-4"
						>
							<h2>Customized Solutions</h2>
							<p>
								Recognizing that every organization has distinct IT needs, we
								provide tailored solutions to enhance operational efficiency and
								security. From data science and predictive analytics to robust
								cloud services and secure data backup,our experts deliver
								customized solutions that directly address your
								industry-specific challenges.
							</p>
						</div>
						<div
							style={{ boxSizing: "border-box !important" }}
							className="col col-lg-4 col-md-6 col-sm-12 col-12 px-4"
						>
							<h2>Expertise and Experience</h2>
							<p>
								Our skilled engineers bring extensive experience across sectors,
								staying updated on the latest advancements in Al, cybersecurity,
								and IT infrastructure. With EsJare's team of experts, you can
								trust that your organization will operate smoothly and
								efficiently, supported by innovative and reliable IT solutions.
							</p>
						</div>
					</div>
				</div>

				<div className="homeDivThree">
					<div
						className="row d-flex justify-content-center"
						style={{
							padding: "1.5rem",
							boxSizing: "border-box",
							width: "100%",
							margin: "0px",
						}}
					>
						{cardData.map((card, index) => (
							<div
								key={index}
								className="col col-12 col-lg-4 col-md-6 col-sm-12 px-3 d-flex justify-content-center pt-4 pb-5"
							>
								<CardComp
									image={card.image}
									heading={card.heading}
									text={card.text}
									navigate={card.navigate}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default memo(Home);
