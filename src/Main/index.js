import React, {forwardRef} from "react";
import About from "../Main/About";
import Services from "../Main/Services";
import Contact from "../Main/Contact";
import wavesSvg from "../assets/wave.svg";
import Testimonials from "./Testimonials";

const Main = (props, ref) => {
	return (
		<div className="section main" ref={ref}>
			<div className="waves">
				<img src={wavesSvg} alt="" />
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
