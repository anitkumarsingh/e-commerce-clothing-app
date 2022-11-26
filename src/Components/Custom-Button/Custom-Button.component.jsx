import React from 'react';
import './Custom-Button.styles.scss';

const CustomButton = ({ children, ...rest }) => {
	return <button className='custom-button'{...rest}>{children}</button>;
};

export default CustomButton;