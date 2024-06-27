import {useRef, useEffect} from "react";
import Hero from "./Hero";
import Main from "./Main";

import gsap, {ScrollTrigger} from "gsap/all";
import "./App.scss";

const App = () => {
	gsap.registerPlugin(ScrollTrigger);
	let tl;

	const containerRef = useRef(null);
	const heroRef = useRef(null);
	const mainRef = useRef(null);
	const footerRef = useRef(null);
	const timeline = () => {
		tl = gsap.timeline({
			defaults: {
				duration: 0.5,
			},
			scrollTrigger: {
				trigger: containerRef.current,
				scrub: true,
				markers: true,
				scrub: 2,
			},
		});
	};

	useEffect(() => {
		timeline();
	}, []);

	return (
		<div className="App" data-scroll-container ref={containerRef}>
			<Hero ref={heroRef} timeline={tl} />
			<Main ref={mainRef} />
		</div>
	);
};

export default App;
