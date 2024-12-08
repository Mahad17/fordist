import servicesImageOne from "../../assets/apmCard.png";
import "./services.css";

const Apm = () => {
	return (
		<section className="servicesSection">
			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
				<h1 style={{ fontWeight: "700" }}>AI-Driven Patient Monitoring</h1>
				<h5>Services | AI-Driven Patient Monitoring</h5>
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
						AI-Driven Patient Monitoring
					</h2>
					<p style={{ fontSize: "larger", fontWeight: "600" }}>
						Leverages advanced artificial intelligence algorithms to
						continuously track and analyze data in real time across various
						industries. In healthcare, it enables early detection of health
						issues, predicts potential complications, and provides actionable
						insights for proactive care. In industrial settings, it monitors
						machinery and processes to predict maintenance needs and prevent
						failures. In finance, it tracks market trends and detects anomalies
						to mitigate risks. Across these and other fields, AI-driven
						monitoring enhances efficiency, ensures safety, and enables timely
						decision-making by identifying patterns and anomalies that might
						otherwise go unnoticed.
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

export default Apm;
