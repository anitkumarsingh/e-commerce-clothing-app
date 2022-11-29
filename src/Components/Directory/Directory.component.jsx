import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../Menu/Menu.component';
import './Directory.styles.scss';


const Directory = ({sections}) =>{
	return(
		<div className='directory-menu'>
		{sections.map(({ id, ...restProps }) => (
			<MenuItem key={id} {...restProps} />
		))}
	</div>
	)
}

const mapStateToProps = (state) => ({
	sections: state.directoryLists.sections
});

export default connect(mapStateToProps)(Directory);
