import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// importing bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Services from "./pages/services/Services.jsx";
import OtherServices from "./pages/services/OtherServices.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Pam from "./pages/services/Pam.jsx"
import Apm from "./pages/services/Apm.jsx";
import Cdsmb from "./pages/services/cdsmb.jsx";
import Iaas from "./pages/services/Iaas.jsx";
import Career from "./pages/career/Career.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/npl",
				element: <Services />,
			},
			{
				path: "/pam",
				element: <Pam />,
			},
			{
				path: "/apm",
				element: <Apm />,
			},
			{
				path: "/cdsmb",
				element: <Cdsmb />,
			},
			{
				path: "/iaas",
				element: <Iaas />,
			},
			{
				path: "/otherservices",
				element: <OtherServices />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/career",
				element: <Career />,
			}
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</StrictMode>
);
