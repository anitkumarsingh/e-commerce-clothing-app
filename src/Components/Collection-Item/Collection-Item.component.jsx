import CustomButton from '../Custom-Button/Custom-Button.component';
import './Collection-Item.styles.scss';
import { CartContext } from '../../Provider/Cart';
import { useContext } from 'react';

const CollectionItems = ({ item }) => {
	const { imageUrl, name, price } = item;
	const { addItem } = useContext(CartContext);
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>
				Add To Cart
			</CustomButton>
		</div>
	);
};

export default CollectionItems;
