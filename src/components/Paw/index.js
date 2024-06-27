import React, {forwardRef} from "react";
import paw from "../../assets/paw.svg";
const Paw = (props, ref) => {
	return (
		<div className="paws" ref={ref}>
			<img src={paw} />
		</div>
	);
};

export default forwardRef(Paw);
