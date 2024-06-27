import React, {forwardRef} from "react";
import "./index.scss";

const ImageContainer = (props, ref) => {
	return (
		<div className="image-container" ref={ref}>
			<div className="image">
				<div className="tape"></div>
				<img src={props.src} />
			</div>
		</div>
	);
};

export default forwardRef(ImageContainer);
