import { connect } from 'react-redux';
import { addItem } from '../../Redux/Actions/Cart/cart';
import CustomButton from '../Custom-Button/Custom-Button.component';
import './Collection-Item.styles.scss';

const CollectionItems = ({ addItems, item }) => {
	const { imageUrl, name, price } = item;
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton inverted onClick={()=>addItems(item)}>Add To Cart</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItems: (item) => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItems);
