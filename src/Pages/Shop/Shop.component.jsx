import React, { Component } from 'react';
import CollectionPreview from '../../Components/Collection-Preview/Collection-Preview.component';
import SHOP_DATA from './Shop-data';

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<>
				{collections.map(({ id, ...restData }) => (
					<CollectionPreview key={id} {...restData} />
				))}
			</>
		);
	}
}

export default Shop;
