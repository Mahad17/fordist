import { memo } from "react";
import "./App.css";
import NavbarOne from "./components/navbar/NavbarOne.jsx";
import MainNavbar from "./components/navbar/MainNavbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
function App() {
	return (
		<>
			{/* <BrowserRouter> */}
				<NavbarOne />
				<MainNavbar />
				{/* <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/otherservices" element={<OtherServices />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				</BrowserRouter> */}
				<Outlet/>
				<Footer/>
		</>
	);
}

export default memo(App);
