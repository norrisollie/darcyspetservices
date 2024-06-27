import React, {forwardRef} from "react";
import "./index.scss";

const ServicePoint = (props, ref) => {
	return (
		<div className="service-point" ref={ref}>
			<div className="icon-container">
				<img className="icon" src={props.src} alt=""/>
				<img className="icon-hover" src={props.hover} alt=""/>
			</div>
			<h3>{props.title}</h3>
			<p>
				Suspendisse hendrerit congue libero vel semper. Nam sollicitudin sem
				scelerisque, pharetra sapien sit amet.
			</p>
		</div>
	);
};

export default forwardRef(ServicePoint);
