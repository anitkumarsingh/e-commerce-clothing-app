import { gql } from '@apollo/client';

const GET_PRODUCT_BY_TITLE = gql`
	query GetProductByTitle($title: String!) {
		getCollectionsByTitle(title: $title) {
			id
			title
			items {
				id
				name
				imageUrl
			}
		}
	}
`;

const GET_ALL_COLLECTIONS = gql`
	{
		collections {
			id
			title
			items {
				id
				name
				price
				imageUrl
			}
		}
	}
`;
export { GET_PRODUCT_BY_TITLE, GET_ALL_COLLECTIONS };
