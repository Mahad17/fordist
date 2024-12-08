import servicesImageOne from "../../assets/nlpCard.jpg";
import "./services.css";

const Services = () => {
	return (
		<section className="servicesSection">
			<div style={{ padding: "3.5rem", background: "rgb(243, 243, 243)" }}>
				<h1 style={{ fontWeight: "700" }}>Natural Processing Language</h1>
				<h5>Services | Natural Processing Language</h5>
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
						Natural Processing Language
					</h2>
					<p style={{ fontSize: "larger", fontWeight: "600" }}>
						Facilitates intuitive querying of unstructured data, such as
						clinical notes and patient reports, to enhance decision-making
						speed.With EsJare's NLP tool, the institution can efficiently search
						and filter relevant information from unstructured clinical reports,
						automatically categorizing insights like patient outcomes and side
						effects. This reduces data querying time by 40%, allowing the
						research team to more quickly identify key trends, thereby
						accelerating their research and publication timelines.
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

export default Services;
