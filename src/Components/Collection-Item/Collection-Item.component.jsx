import CustomButton from '../Custom-Button/Custom-Button.component';
import './Collection-Item.styles.scss';

const CollectionItems = ({ imageUrl, name, price }) => {
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton inverted>Add To Cart</CustomButton>
		</div>
	);
};

export default CollectionItems;