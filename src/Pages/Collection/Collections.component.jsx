import React, { useEffect } from 'react';
import { getCollections } from '../../Redux/Actions/Shop';
import CollectionItem from '../../Components/Collection-Item/Collection-Item.component';
import { useDispatch, useSelector } from 'react-redux';
import './Collections.styles.scss';

const CollectionsComponent = ({ match }) => {
	const { title } = match.params;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCollections());
	}, [title, dispatch]);

	const { collection } = useSelector((s) => s.shop) || [];
	const { items } = collection.filter((i) => i.title.toLowerCase() === title)[0] || [];

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
};

export default CollectionsComponent;
