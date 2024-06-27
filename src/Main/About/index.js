import React, {useEffect, useRef} from "react";
import ImageContainer from "../../components/ImageContainer";
import image from "../../assets/me.jpg";

import gsap, {ScrollTrigger} from "gsap/all";

const About = () => {
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
				markers: false,
			},
		});

		tl.to(leftRef.current, {opacity: 1, scale: 1}, 0);
		tl.to(rightRef.current.children, {opacity: 1, stagger: 0.5}, 0.25);
	}, []);

	const containerRef = useRef(null),
		leftRef = useRef(null),
		rightRef = useRef(null);

	return (
		<div className="about inner" ref={containerRef}>
			<div className="left" ref={leftRef}>
				<ImageContainer src={image} />
			</div>
			<div className="right" ref={rightRef}>
				<h2>Hello, I'm Darcy.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et mattis
					justo, in egestas libero. Etiam scelerisque, orci quis sagittis
					fermentum, magna massa posuere orci, non sodales felis lacus vitae
					odio. Etiam eu nisl vel ligula dictum posuere. In ac justo id dui
					convallis vestibulum vitae nec urna. Vivamus hendrerit elit quam, eget
					euismod magna elementum in. Vivamus non quam ante. Etiam feugiat lorem
					augue, sit amet tincidunt dui dictum at. Vestibulum efficitur nisi
					quis lectus condimentum, sit amet accumsan ante ultrices. Aliquam erat
					volutpat. Ut tempus sed quam nec posuere. Suspendisse urna nibh,
					laoreet quis neque ornare, hendrerit accumsan tellus.
				</p>
				{/* Insured &bull; Qualified in Pet First Aid &bull; DBS Checked
						<br />
						Based in Leigh on Sea & surrounding areas */}
			</div>
		</div>
	);
};

export default About;
