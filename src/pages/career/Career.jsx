import FeedbackForm from "../../components/Form/FeedbackForm";
import careersImage from "../../assets/careers.png"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Career = () => {
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
		<section id="join-us" className="contactSection">
			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
				<h1 style={{ fontWeight: "700" }}>Careers</h1>
				<h5>Home | Careers</h5>
			</div>

			{/* div One */}
			<div id="contactDivOne" className="row m-0 py-4">
				<div
					className="col col-12 col-lg-6 col-md-12 col-sm-12"
					style={{
						textAlign: "left",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<h2 style={{ fontWeight: "700", color: "#0071cdd5" }}>
						Join the Esjare Family!
					</h2>
					<p style={{ fontSize: "larger", fontWeight: "500" }}>
						At Esjare, we’re not just building careers; we’re crafting success
						stories. We believe in empowering our team to innovate, collaborate,
						and grow in a dynamic environment that fosters creativity and
						excellence. Esjare offers opportunities that ignite passion and
						unleash potential. Ready to take the next step in your career? Let’s
						shape the future together!
					</p>
				</div>
				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
					<div className="contactImageCont">
						<img style={{objectFit: "contain"}} src={careersImage} alt="image" />
					</div>
				</div>
			</div>
			 <div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
				className="p-5"
			>
				<h2 style={{ fontWeight: "700", color: "#0071cdd5" }}>
					Drop your mail to get latest job updates
				</h2>
				<FeedbackForm incEmail={true} incSubject={false} incText={false}/>
			</div> 
		</section>
	);
};

export default Career;
