import React, {forwardRef} from "react";
import About from "../Main/About";
import Services from "../Main/Services";
import Contact from "../Main/Contact";

import ImageContainer from "../components/ImageContainer";
import Paw from "../components/Paw";
import wavesSvg from "../assets/wave.svg";

import image from "../assets/polaroid-1.jpg";
import Testimonials from "./Testimonials";

const Main = (props, ref) => {
	return (
		<div className="section main" ref={ref}>
			<div className="waves">
				<img src={wavesSvg} />
			</div>
			<div className="main-wrapper">
				<About />
				<Services />
				<Testimonials />
				<Contact />
			</div>
		</div>
	);
};

export default forwardRef(Main);
