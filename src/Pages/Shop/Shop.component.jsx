import React from 'react';
import CollectionPreview from '../../Components/Collection-Preview/Collection-Preview.component';
import {useQuery} from '@apollo/client';
import { GET_ALL_COLLECTIONS } from '../../Graphql/Quaries';
import Spinner from '../../Components/Spinner/Spinner.component';

const Shop = ()=> {
	const {loading,error,data} = useQuery(GET_ALL_COLLECTIONS);
	if(loading) return (<Spinner/>)
	if(error) console.log(error);

		return (
			<>
				{data?.collections.map(({ id, ...restData }) => (
					<CollectionPreview key={id} {...restData} />
				))}
			</>
		);
	}

export default Shop;
