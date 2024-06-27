import React, {forwardRef, useRef, useEffect} from "react";
import ImageContainer from "../components/ImageContainer";
import Paw from "../components/Paw";
import logo from "../assets/logo-green.png";
import gsap, {ScrollTrigger} from "gsap/all";

import polaroid1 from "../assets/polaroid-1.jpg";
import polaroid2 from "../assets/polaroid-2.jpg";
import polaroid3 from "../assets/polaroid-3.jpg";
import polaroid4 from "../assets/polaroid-4.jpg";
import polaroid5 from "../assets/polaroid-5.jpg";
import polaroid6 from "../assets/polaroid-6.jpg";
import polaroid7 from "../assets/polaroid-7.jpg";

function Hero(props, ref) {
	gsap.registerPlugin(ScrollTrigger);

	const logoContainerRef = useRef(null),
		logoRef = useRef(null),
		imagesContainerRef = useRef(null);

	const images = [],
		paws = [];

	useEffect(() => {
		var tl = gsap.timeline({
			defaults: {
				duration: 1,
			},
			scrollTrigger: {
				trigger: ref.current,
				start: "top",
				end: "bottom",
				scrub: 0.5,
				pin: true,
			},
		});

		gsap.fromTo(logoContainerRef.current, {opacity: 0}, {opacity: 1}, 0);
		tl.fromTo(
			logoContainerRef.current,
			{scale: 1},
			{scale: 0.5, transformOrigin: "center top"},
			0
		);
		tl.fromTo(
			imagesContainerRef.current,
			{opacity: 0},
			{yPercent: -75, opacity: 1},
			0
		);

		tl.fromTo(images[0], {yPercent: 100}, {yPercent: 0}, 0.1);
		tl.fromTo(images[1], {yPercent: 100}, {yPercent: 0}, 0.2);
		tl.fromTo(images[2], {yPercent: 100}, {yPercent: 0}, 0.3);
		tl.fromTo(images[3], {yPercent: 100}, {yPercent: 0}, 0.4);

		tl.fromTo(images[4], {yPercent: 100}, {yPercent: 0}, 0.5);
		tl.fromTo(images[5], {yPercent: 100}, {yPercent: 0}, 0.6);
		tl.fromTo(images[6], {yPercent: 100}, {yPercent: 0}, 0.7);

		tl.fromTo(paws[0], {y: 0}, {y: "-150vh", duration: 0.75}, 0.1);
		tl.fromTo(paws[1], {y: 0}, {y: "-150vh", duration: 0.75}, 0.44);
		tl.fromTo(paws[2], {y: 0}, {y: "-150vh", duration: 0.75}, 0.25);
		tl.fromTo(paws[3], {y: 0}, {y: "-150vh", duration: 0.75}, 0.5);
		tl.fromTo(paws[4], {y: 0}, {y: "-150vh", duration: 0.75}, 0.35);
		tl.fromTo(paws[5], {y: 0}, {y: "-150vh", duration: 0.75}, 0.3);
		tl.fromTo(paws[6], {y: 0}, {y: "-150vh", duration: 0.75}, 0.2);
		tl.fromTo(paws[7], {y: 0}, {y: "-150vh", duration: 0.75}, 0.4);

		tl.fromTo(paws[8], {y: 0}, {y: "-150vh", duration: 0.75}, 0.1);
		tl.fromTo(paws[9], {y: 0}, {y: "-150vh", duration: 0.75}, 0.44);
		tl.fromTo(paws[10], {y: 0}, {y: "-150vh", duration: 0.75}, 0.25);
		tl.fromTo(paws[11], {y: 0}, {y: "-150vh", duration: 0.75}, 0.5);
		tl.fromTo(paws[12], {y: 0}, {y: "-150vh", duration: 0.75}, 0.35);
		tl.fromTo(paws[13], {y: 0}, {y: "-150vh", duration: 0.75}, 0.3);
		tl.fromTo(paws[14], {y: 0}, {y: "-150vh", duration: 0.75}, 0.2);
		tl.fromTo(paws[15], {y: 0}, {y: "-150vh", duration: 0.75}, 0.4);
	});

	return (
		<div className="section hero" ref={ref}>
			<div className="logo-container" ref={logoContainerRef}>
				<div className="logo">
					<img src={logo} ref={logoRef} alt="Darcy's Pet Services Logo" />
				</div>
			</div>
			<div className="images-container" ref={imagesContainerRef}>
				<ImageContainer
					src={polaroid1}
					ref={(el) => {
						images.push(el);
					}}
				/>
				<ImageContainer
					src={polaroid2}
					ref={(el) => {
						images.push(el);
					}}
				/>
				<ImageContainer
					src={polaroid3}
					ref={(el) => {
						images.push(el);
					}}
				/>
				<ImageContainer
					src={polaroid4}
					ref={(el) => {
						images.push(el);
					}}
				/>
				<ImageContainer
					src={polaroid5}
					ref={(el) => {
						images.push(el);
					}}
				/>
				<ImageContainer
					src={polaroid6}
					ref={(el) => {
						images.push(el);
					}}
				/>
				<ImageContainer
					src={polaroid7}
					ref={(el) => {
						images.push(el);
					}}
				/>
			</div>
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
			<Paw ref={(el) => paws.push(el)} />
		</div>
	);
}

export default forwardRef(Hero);
