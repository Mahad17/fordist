import servicesImageOne from "../../assets/cdsmbCard.webp";
import "./services.css";

const Cdsmb = () => {
	return (
		<section className="servicesSection">
			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
				<h1 style={{ fontWeight: "700" }}>Custom Data Science Model Builder</h1>
				<h5>Services | Custom Data Science Model Builder</h5>
			</div>

			{/* div One */}
			<div id="npl" className="row m-0 py-4">
				<div
					className="col col-12 col-lg-6 col-md-12 col-sm-12"
					style={{
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems:"center"
					}}
				>
					<h2 style={{ fontWeight: "700", color: "#0072CE" }}>
						Custom Data Science Model Builder
					</h2>
					<p style={{ fontSize: "larger", fontWeight: "600" }}>
						Service delivers tailored, end-to-end solutions designed to address
						unique challenges across diverse industries. From healthcare and
						finance to transportation, agriculture, and energy, we specialize in
						creating problem-specific models that integrate seamlessly into
						existing systems while ensuring scalability and adaptability. Our
						approach combines advanced machine learning techniques with domain
						expertise to provide actionable insights, optimize processes, and
						empower organizations with innovative, transparent, and data-driven
						decision-making capabilities. Additionally, we offer continuous
						support and refinement to ensure long-term value and performance.
					</p>
				</div>
				<div className="col col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
					<div className="servicesImageCont">
						<img src={servicesImageOne} alt="image" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cdsmb;
