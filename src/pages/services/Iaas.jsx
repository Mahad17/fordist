import servicesImageOne from "../../assets/iaasCard.jpg";
import "./services.css";

const Iaas = () => {
	return (
		<section className="servicesSection">
			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
				<h1 style={{ fontWeight: "700" }}>
					Integrated AI for Ambulance Services
				</h1>
				<h5>Services | Integrated AI for Ambulance Services</h5>
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
						Integrated AI for Ambulance Services
					</h2>
					<p style={{ fontSize: "larger", fontWeight: "600" }}>
						Enhances emergency response efficiency and patient outcomes by
						leveraging cutting-edge artificial intelligence. Our solutions
						optimize ambulance dispatch, route planning, and real-time traffic
						analysis to ensure faster response times. Additionally, we integrate
						predictive analytics to prepare medical teams with critical patient
						data before arrival, enabling better on-site decision-making. This
						service also supports seamless communication between ambulances,
						hospitals, and emergency services, creating a fully connected
						ecosystem that prioritizes timely and effective care delivery.
						Beyond healthcare, this technology can be adapted for logistics,
						disaster response, and other time-sensitive operations,
						demonstrating its versatility and impact across various sectors.
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

export default Iaas;
