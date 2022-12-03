import { CollectionContext } from '../../Context/Collections/Collections-Context';
import React from 'react';
import CollectionItem from '../../Components/Collection-Item/Collection-Item.component';
import './Collections.styles.scss';

const CollectionConsumer = ({ match }) => {
	return (
		<CollectionContext.Consumer>
			{(collections) => {
				const collection = collections[match.params.id];
				const { title, items } = collection;
				return (
					<div className='collection-page'>
						<h2 className='title'>{title}</h2>
						<div className='preview'>
							<div className='items'>
								{items.map((item) => (
									<CollectionItem key={item.id} item={item} />
								))}
							</div>
						</div>
					</div>
				);
			}}
		</CollectionContext.Consumer>
	);
};
export default CollectionConsumer;
