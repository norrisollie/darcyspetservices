import React, {useEffect, useRef} from "react"
import TestimonialsPoint from "../../components/TestimonialsPoint"
import gsap, {ScrollTrigger} from "gsap/all"
const Testimonials = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const tl = gsap.timeline({
			defaults: {
				duration: 2,
				ease: "power3.out",
			},
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top",
				markers: true,
			},
		})

		tl.to(titleRef.current, {opacity: 1, scale: 1}, 0)
		tl.to(
			testimonialsRef.current.children,
			{
				opacity: 1,
				stagger: 0.5,
			},
			0.25
		)
	})

	const containerRef = useRef(null),
		titleRef = useRef(null),
		testimonialsRef = useRef(null)
	return (
		<div className="testimonials inner" ref={containerRef}>
			<div className="title-container" ref={titleRef}>
				<h2>Testimonials</h2>
			</div>
			<div className="testimonials-container" ref={testimonialsRef}>
				<TestimonialsPoint
					title={"Darcy is a natural\nwith animals"}
					description={""}
					name={"Dolly Parton"}
					location={"Southend"}
				/>
				<TestimonialsPoint
					title={"Couldnt recommend\nDarcy enough"}
					description={""}
					name={"Justin Bieber"}
					location={"Leigh-on-Sea"}
				/>
				<TestimonialsPoint
					title={"Darcy beams with love\nfor animals"}
					description={""}
					name={"Demi Lovato"}
					location={"Leigh-on-Sea"}
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
	)
}

export default Testimonials