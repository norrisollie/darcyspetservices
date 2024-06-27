import React, {useEffect, useRef} from "react";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import email from "../../assets/email.svg";
import mobile from "../../assets/mobile.svg";
import gsap, {ScrollTrigger} from "gsap/all";
const Contact = () => {
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

		tl.to(leftRef.current, {opacity: 1, scale: 1}, 0);
		tl.to(rightRef.current, {opacity: 1, stagger: 0.5}, 0.25);
	}, []);

	const containerRef = useRef(null),
		leftRef = useRef(null),
		rightRef = useRef(null);
	return (
		<div className="contact inner" ref={containerRef}>
			<div className="left" ref={leftRef}>
				<div className="social">
					<div className="icon">
						<img src={facebook} />
					</div>
					<a href="https://www.facebook.com/darcyspetservices">
						Darcy's Pet Services
					</a>
				</div>
				<div className="social">
					<div className="icon">
						<img src={instagram} />
					</div>
					<a href="https://www.instagram.com/darcyspetservices_">
						@darcyspetservices_
					</a>
				</div>
				<div className="social">
					<div className="icon">
						<img src={email} />
					</div>
					<a href="mailto:darcyspetservices@gmail.com">
						darcyspetservices@gmail.com
					</a>
				</div>
				<div className="social">
					<div className="icon">
						<img src={mobile} />
					</div>
					<a href="tel:07961239690">07961239690</a>
				</div>
			</div>
			<div className="right" ref={leftRef}></div>
		</div>
	);
};

export default Contact;
