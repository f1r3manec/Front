import { useState } from 'react';

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);
	const reset = (newValues = initialState) => {
		setValues(newValues);
	};
	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
	};
	const handleInputCheck = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.checked,
		});
	};

	return { values, handleInputChange, reset, handleInputCheck };
};
