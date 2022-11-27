import CollectionItems from '../Collection-Item/Collection-Item.component';
import './Collection-Preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className='collection-preview'>
			<div className='title'>{title}</div>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => {
						return(
              <CollectionItems {...item} key={item.id}/>
            );
					})}
			</div>
		</div>
	);
};

export default CollectionPreview;
