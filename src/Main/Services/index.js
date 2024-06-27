import React, {useEffect, useRef} from "react";
import ServicePoint from "../../components/ServicePoint";

import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import icon1Hover from "../../assets/icon1-hover.svg";
import icon2Hover from "../../assets/icon2-hover.svg";
import icon3Hover from "../../assets/icon3-hover.svg";
import icon4Hover from "../../assets/icon4-hover.svg";
import icon5Hover from "../../assets/icon5-hover.svg";

import gsap, {ScrollTrigger} from "gsap/all";
const Services = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			defaults: {
				duration: 2,
				ease: "power3.out",
			},
			scrollTrigger: {
				trigger: containerRef.current,
				start: "bottom bottom -=100%",
				markers: true,
			},
		});

		tl.to(titleRef.current, {opacity: 1, scale: 1}, 0);
		tl.to(
			servicesRef.current.children,
			{
				opacity: 1,
				stagger: {
					grid: [1, 5],
					from: "center",
					axis: "x",
					ease: "power3.inOut",
					amount: 0.75,
				},
			},
			0.25
		);
	}, []);

	const containerRef = useRef(null),
		titleRef = useRef(null),
		servicesRef = useRef(null);

	return (
		<div className="services inner" ref={containerRef}>
			<div className="title-container" ref={titleRef}>
				<h2>Services</h2>
			</div>
			<div className="services-container" ref={servicesRef}>
				<ServicePoint
					title={"Dog Walking"}
					src={icon1}
					hover={icon1Hover}
					description={""}
				/>
				<ServicePoint
					title={"Dog & Cat Visits"}
					src={icon2}
					hover={icon2Hover}
					description={""}
				/>
				<ServicePoint
					title={"Small Animal Visits"}
					src={icon3}
					hover={icon3Hover}
					description={""}
				/>
				<ServicePoint
					title={"Overnight Stays"}
					src={icon4}
					hover={icon4Hover}
					description={""}
				/>
				<ServicePoint
					title={"Day Sits"}
					src={icon5}
					hover={icon5Hover}
					description={""}
				/>
			</div>

			{/* <ul>
				<li className="service-item">Dog Walking</li>
				<li className="service-item">Dog & Cat Visits</li>
				<li className="service-item">Small animal Visits</li>
				<li className="service-item">Overnight Stays</li>
				<li className="service-item">Day Sits</li>
			</ul> */}
		</div>
	);
};

export default Services;
