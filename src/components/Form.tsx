import React from "react";

const Form = () => {
	return (
		<form>
			<div className="mb-3">
				<label htmlFor="name" className="form-lable">
					Name
				</label>
				<input id="name" type="text" className="form-control" />
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input id="age" type="number" className="form-control" />
			</div>
			<button className="btn btn-primary">Submit</button>
		</form>
	);
};

export default Form;
