import {useRef, useEffect} from "react";
import Hero from "./Hero";
import Main from "./Main";
import "./App.scss";
import gsap, {ScrollTrigger} from "gsap/all";

const App = () => {
	gsap.registerPlugin(ScrollTrigger);
	let tl;

	const containerRef = useRef(null);
	const heroRef = useRef(null);
	const mainRef = useRef(null);

	const timeline = () => {
		tl = gsap.timeline({
			defaults: {
				duration: 0.5,
			},
			scrollTrigger: {
				trigger: containerRef.current,
				scrub: true,
				markers: false,
			},
		});
	};

	useEffect(() => {
		timeline();
	});

	return (
		<div className="App" ref={containerRef}>
			<Hero ref={heroRef} timeline={tl} />
			<Main ref={mainRef} />
		</div>
	);
};

export default App;
