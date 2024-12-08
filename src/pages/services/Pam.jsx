import servicesImageOne from "../../assets/pamCard.jpg";
import "./services.css";

const Pam = () => {
	return (
		<section className="servicesSection">
			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
				<h1 style={{ fontWeight: "700" }}>Predictive Analytics Models</h1>
				<h5>Services | Predictive Analytics Models</h5>
			</div>

			{/* div One */}
			<div className="row m-0 py-4">
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
						Predictive Analytics Models
					</h2>
					<p style={{ fontSize: "larger", fontWeight: "600" }}>
						Our predictive analysis model leverages AI and machine learning to
						deliver real-time insights across various industries. It predicts
						critical trends like patient deterioration in healthcare using
						time-series forecasting, optimizes logistics and emergency response
						with reinforcement learning, forecasts industry-specific events such
						as disease outbreaks or supply chain disruptions using
						spatio-temporal analysis, enhances financial planning with
						regression models, and anticipates workforce or resource needs based
						on demand patterns. These capabilities empower organizations to
						improve operational efficiency, decision-making, and overall
						outcomes in healthcare, logistics, finance, and beyond.
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

export default Pam;
