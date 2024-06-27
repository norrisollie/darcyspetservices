import React, {forwardRef} from "react";
import "./index.scss";

const TestimonialsPoint = (props, ref) => {
	return (
		<div className="testimonial" ref={ref}>
			<h3>{props.title}</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat
				at dui id efficitur. Nulla facilisi. Aenean vitae ultricies ligula,
				mattis posuere nisl. Etiam consequat non lorem ac consequat. Donec
				gravida blandit pulvinar. Lorem ipsum.
			</p>
			<p className="name">{props.name}</p>
		</div>
	);
};

export default forwardRef(TestimonialsPoint);
